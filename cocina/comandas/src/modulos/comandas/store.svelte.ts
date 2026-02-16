import { serviceCocina } from './service';
import type { Comanda, EstadoComanda, EventoComandaPayloadType, ComandaProducto } from './schema.zod.2';
import { io } from 'socket.io-client';

const idCocineroActual = 8; 

export class GestorCocina {
    // Runes de estado (Svelte 5)
    #comandas = $state<Comanda[]>([]);
    #idCocineroLogueado = $state<number | null>(null);
    #online = $state<boolean>(false); 

    constructor(idCocinero: number) {
        this.#idCocineroLogueado = idCocinero;
    }

    // --- Getters Reactivos ---
    get todas() { return this.#comandas; }
    get isOnline() { return this.#online; }
    get criticas() { return this.#comandas.filter(c => c.estado === 'SINCOCINA'); }
    get enMarcha() { return this.#comandas.filter(c => c.estado === 'PENDIENTE'); }
    get finalizadas() { return this.#comandas.filter(c => c.estado === 'FINALIZADA'); }
    
    get misComandas() {
        if (!this.#idCocineroLogueado) return [];
        return this.#comandas.filter(c => 
            c.productos.some(p => p.idCocinero === this.#idCocineroLogueado)
        );
    }

    // --- Inicialización ---
    async inicializar(usarServidor = false) {
        this.#online = usarServidor;
        
        if (this.#online) {
            try {
                this.#comandas = await serviceCocina.getAll();
                // Conexión Socket
                //const socket = io('http://localhost:3000');
                const socketHost = window.location.hostname; // Detecta si es localhost o 192.168.1.109
                const socket = io(`http://${socketHost}:3000`);                
                socket.on('cocina_update', (payload: EventoComandaPayloadType) => {
                    console.log(`📡 Evento Socket: ${payload.tipo}`, payload.data);
                    this.procesarEvento(payload);
                });
            } catch (error) {
                console.error("Error conexión real:", error);
                this.#online = false;
            }
        } else {
            console.log("🛠 Modo Desarrollo Activo");
            this.#comandas = this.generarDatosPrueba();
        }
    }

    // --- Acciones On Detalle Comanda (Bifurcación Online/Offline) ---

    async cogerProducto(idDetalleComanda: number) {
        if (!this.#idCocineroLogueado) return;

        if (this.#online) {
            await serviceCocina.cogerPedido(idDetalleComanda, this.#idCocineroLogueado);
        } else {
            this.#modificarProductoLocal(idDetalleComanda, (p) => {
                p.idCocinero = this.#idCocineroLogueado;
            });
            //
            const comanda = this.#comandas.find(c => c.productos.some(p => p.id === idDetalleComanda));
            const idComanda = comanda?.idComanda;
            if (idComanda) this.#verificarEstadoComandaOfDetalle(idDetalleComanda);
        }
    }

    async servirProducto(idDetalleComanda: number, cantidad: number) {
        if (!this.#idCocineroLogueado) return;

        if (this.#online) {
            await serviceCocina.servirPedido(idDetalleComanda, cantidad, this.#idCocineroLogueado);
        } else {
            this.#modificarProductoLocal(idDetalleComanda, (p) => {
                p.servido = cantidad;
                p.idCocinero = this.#idCocineroLogueado; // Aseguramos dueño al servir
            });
            const comanda = this.#comandas.find(c => c.productos.some(p => p.id === idDetalleComanda));
            const idComanda = comanda?.idComanda;
            if (idComanda) this.#verificarEstadoComandaOfDetalle(idDetalleComanda);
        }
    }

    async liberarProducto(idDetalleComanda: number) {
        if (!this.#idCocineroLogueado) return;

        if (this.#online) {
            await serviceCocina.liberarPedido(idDetalleComanda, this.#idCocineroLogueado);
        } else {
            this.#modificarProductoLocal(idDetalleComanda, (p) => {
                p.idCocinero = null;
            });
            this.#verificarEstadoComandaOfDetalle(idDetalleComanda);
        }
    }

    async anularComanda(idComanda: number) {
        if (this.#online) {
            try {
                await serviceCocina.anular(idComanda);
            } catch (error) {
                console.error("Error al anular:", error);
            }
        } else {
            this.#comandas = this.#comandas.filter(c => c.idOperacion !== idComanda);
        }
    }

    // --- Manejo de Eventos (Sincronización con Enum Zod) ---

    procesarEvento(evento: EventoComandaPayloadType) {
        const { tipo, data } = evento;
        const idx = this.#comandas.findIndex(c => c.idComanda  === data.idComanda);

        switch (tipo) {
            case 'NUEVA_COMANDA':
                // Evitar duplicados por si acaso
                if (idx === -1) this.#comandas.push(data as Comanda);
                break;

            case 'PRODUCTO_COGER':
            case 'PRODUCTO_SOLTAR':
            case 'PRODUCTO_SERVIDO':
            case 'COMANDA_ACTUALIZADA':
            case 'COMANDA_SINCOCINA':
            case 'COMANDA_FINALIZADA':
                if (idx !== -1) {
                    // Actualización reactiva profunda de Svelte 5
                    this.#comandas[idx] = data as Comanda;
                }
                break;

            case 'COMANDA_ELIMINADA':
            case 'COMANDA_ENTREGADA':
                this.#comandas = this.#comandas.filter(c => c.idOperacion !== data.idOperacion);
                break;
        }
    }

    // --- Helpers Mock ---

    #modificarProductoLocal(idDetalleComanda: number, callback: (p: ComandaProducto) => void) {
        const comanda = this.#comandas.find(c => c.productos.some(p => p.id === idDetalleComanda));
        const producto = comanda?.productos.find(p => p.id === idDetalleComanda);
        if (producto) callback(producto);
    }

    #verificarEstadoComandaOfDetalle(idDetalleComanda: number) {
        const idx = this.#comandas.findIndex(c => c.productos.some(p => p.id === idDetalleComanda));
        if (idx === -1) return;

        const c = this.#comandas[idx];
        const todosServidos = c.productos.every(p => p.servido >= p.pedido);
        const algunoAsignado = c.productos.some(p => p.idCocinero !== null);

        if (todosServidos) c.estado = 'FINALIZADA';
        else if (algunoAsignado) c.estado = 'PENDIENTE';
        else c.estado = 'SINCOCINA';
        
        this.#comandas[idx] = { ...c }; // Trigger reactivo
    }

    generarDatosPrueba(): Comanda[] {
        return [
            {
                idComanda: 1, idOperacion: 101, estado: 'SINCOCINA', updatedAt: new Date(),
                stats: { totalLineas: 2, lineasFinalizadas: 0, lineasPendientes: 2, lineasSinCocinero: 2, porcentaje: 0 },
                productos: [
                    { id: 1, idProducto: 1, nombre: 'Burger Mega', pedido: 2, servido: 0, idCocinero: null },
                    { id: 2,  idProducto: 2, nombre: 'Papas G', pedido: 1, servido: 0, idCocinero: null }
                ]
            },
            {
                idComanda: 2, idOperacion: 102, estado: 'PENDIENTE', updatedAt: new Date(),
                stats: { totalLineas: 1, lineasFinalizadas: 0, lineasPendientes: 1, lineasSinCocinero: 0, porcentaje: 0 },
                productos: [
                    { id: 3, idProducto: 3, nombre: 'Pizza BBQ', pedido: 1, servido: 0, idCocinero: 8 }
                ]
            }
        ];
    }
}

export const gestorCocina = new GestorCocina(idCocineroActual);