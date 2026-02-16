import { ComandasError } from './error';
import type { 
  ComandaProductos, 
  EstadoComanda, 
  EventoComandaPayloadType, 
  TiposEventoComandaType 
} from './schema.dto';

/**
 * AGREGADO DE DOMINIO: Comanda
 * Ahora diferencia entre la Clave Primaria (idComanda) y la Clave de Negocio (idOperacion).
 */
export class ComandaAggregate {
  private idComanda: number;    // ID Real en DB (Postgres PK) -> El "6"
  private idOperacion: number;  // ID de Ticket/Venta -> El "16"
  private productos: ComandaProductos[];
  
  private eventosPendientes: Partial<EventoComandaPayloadType>[] = [];

  /**
   * El constructor ahora requiere ambos IDs para evitar confusiones en persistencia.
   */
  constructor(idComanda: number, idOperacion: number, productos: ComandaProductos[]) {
    this.idComanda = idComanda;
    this.idOperacion = idOperacion;
    this.productos = productos;
  }

  // --- Identificadores ---
  getIdComanda() { return this.idComanda; } // USAR ESTE PARA EL WHERE DE PRISMA
  getIdOperacion() { return this.idOperacion; } // USAR ESTE PARA EL FRONT/UI
  getProductos() { return [...this.productos]; }

  // --- Cálculos de Estado ---

  estaAnulada(): boolean {
    return this.productos.every(p => p.servido === -1);
  }

  estaFinalizada(): boolean {
    const totalPedido = this.productos.reduce((acc, p) => acc + p.pedido, 0);
    const totalServido = this.productos.reduce((acc, p) => acc + p.servido, 0);
    return totalServido >= totalPedido && totalPedido > 0;
  }

  estaSinCocinero(): boolean {
    return this.productos
      .filter(p => p.servido < p.pedido)
      .every(p => !p.idCocinero);
  }

  getEstado(): EstadoComanda {
    if (this.estaAnulada()) return 'ANULADA';
    if (this.estaFinalizada()) return 'FINALIZADA';
    if (this.estaSinCocinero()) return 'SINCOCINA';
    return 'PENDIENTE'; 
  }

  getResumenItems() {
      const productosActivos = this.productos.filter(p => p.servido !== -1);
      const totalLineas = productosActivos.length;
      const lineasFinalizadas = productosActivos.filter(p => p.servido >= p.pedido).length;
      const lineasPendientes = totalLineas - lineasFinalizadas;
      const lineasSinCocinero = productosActivos.filter(p => 
          p.servido < p.pedido && !p.idCocinero
      ).length;

      return {
          totalLineas,        
          lineasFinalizadas,  
          lineasPendientes,   
          lineasSinCocinero,  
          porcentaje: totalLineas > 0 
              ? Math.round((lineasFinalizadas / totalLineas) * 100) 
              : 0
      };
  }
  // --- Gestión de Notificaciones ---

  private registrarEvento(tipo: TiposEventoComandaType) {
    this.eventosPendientes.push({
      tipo,
      timestamp: Date.now(),
      data: {
        idComanda: this.idComanda,     // Necesario para el Backend/Sockets
        idOperacion: this.idOperacion, // Necesario para que Svelte encuentre la tarjeta
        estado: this.getEstado(),
        stats: this.getResumenItems(),
        productos: JSON.parse(JSON.stringify(this.productos))
      }
    });
  }

  public pullEvents() {
    const eventos = [...this.eventosPendientes];
    this.eventosPendientes = [];
    return eventos;
  }

  // --- Acciones de Negocio ---

  asignarCocinero(idDetalleComanda: number, idCocinero: number) {
    const prod = this.productos.find(p => p.id === idDetalleComanda);
    if (!prod) throw new ComandasError(1);
    if (prod.idCocinero && prod.idCocinero !== idCocinero) throw new ComandasError(1);
    
    prod.idCocinero = idCocinero;
    this.registrarEvento('PRODUCTO_COGER'); 
  }

  liberarProducto(idDetalleComanda: number, idCocinero: number) {
    const prod = this.productos.find(p => p.id === idDetalleComanda);
    if (!prod) throw new ComandasError(1);
    if (prod.idCocinero !== idCocinero) throw new ComandasError(1);
    
    prod.idCocinero = null;
    const tipo = this.estaSinCocinero() ? 'COMANDA_SINCOCINA' : 'COMANDA_ACTUALIZADA';
    this.registrarEvento(tipo);
  }

  servirProducto(idDetalleComanda: number, idCocinero: number, cantidad: number) {
    const prod = this.productos.find(p => p.id === idDetalleComanda);
    if (!prod) throw new ComandasError(1);
    
    prod.idCocinero = idCocinero;
    prod.servido = Math.min(cantidad, prod.pedido);
    
    this.registrarEvento(this.estaFinalizada() ? 'COMANDA_FINALIZADA' : 'PRODUCTO_SERVIDO');
  }

  anularComanda() {
    this.productos.forEach(p => p.servido = -1);
    this.registrarEvento('COMANDA_ELIMINADA');
  }

  entregarComanda() {
    this.registrarEvento('COMANDA_ENTREGADA');
  }
}