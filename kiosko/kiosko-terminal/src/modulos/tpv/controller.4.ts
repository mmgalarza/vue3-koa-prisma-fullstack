import type { Categoria, Producto, Descuento } from './types';
import type { AuthUser } from '@app/auth/contract';
import { categoriasService } from './services/categorias.service';
import { operacionesService } from './services/operaciones.service';
import { productosService } from './services/productos.service';

interface ItemCarrito {
  idProducto: number;
  nombre: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

interface KioskeroEstado {
  arbolCategorias: Categoria[];
  productosSugeridos: Producto[];
  carrito: { 
    total: number; 
    operacionesDetalle: ItemCarrito[];
    descuentos: Descuento[]; 
  };
  user: AuthUser | null; 
  puntos: { acumulados: number; aplicados: number };
  loading: boolean;
}

// Interfaz de respuesta para que TypeScript no se queje en el Checkout
export interface RespuestaCobro {
  success: boolean;
  idOperacion: number;
  total: number;
}

export class KioskeroController {
  #estado: KioskeroEstado = {
    arbolCategorias: [],
    productosSugeridos: [],
    carrito: { total: 0, operacionesDetalle: [], descuentos: [] },
    user: null, 
    puntos: { acumulados: 0, aplicados: 0 },
    loading: false
  };

  #oyentes = new Set<() => void>();

  // Cambiado a método para consistencia con los componentes
  getEstado() { return this.#estado; }

  // --- 1. IDENTIDAD ---

  setUser(user: AuthUser | null) {
    this.#actualizar({ 
      user,
      puntos: user?.idCliente ? { acumulados: 100, aplicados: 0 } : { acumulados: 0, aplicados: 0 }
    });
    this.#recalcularTotales();
  }

  // --- 2. CARRITO (GESTIÓN EN RAM) ---

  anotarProducto(producto: Producto) {
    const detalles = [...this.#estado.carrito.operacionesDetalle];
    const indice = detalles.findIndex(d => d.idProducto === producto.idProducto);

    if (indice !== -1) {
      const nuevaCant = detalles[indice].cantidad + 1;
      detalles[indice] = {
        ...detalles[indice],
        cantidad: nuevaCant,
        subtotal: nuevaCant * detalles[indice].precioUnitario
      };
    } else {
      detalles.push({
        idProducto: producto.idProducto,
        nombre: producto.nombre,
        cantidad: 1,
        precioUnitario: producto.precios,
        subtotal: producto.precios
      });
    }
    this.#actualizarCarrito(detalles);
  }

  quitarProducto(idProducto: number) {
    let detalles = [...this.#estado.carrito.operacionesDetalle];
    const indice = detalles.findIndex(d => d.idProducto === idProducto);

    if (indice === -1) return;

    if (detalles[indice].cantidad > 1) {
      const nuevaCant = detalles[indice].cantidad - 1;
      detalles[indice] = {
        ...detalles[indice],
        cantidad: nuevaCant,
        subtotal: nuevaCant * detalles[indice].precioUnitario
      };
    } else {
      detalles = detalles.filter(d => d.idProducto !== idProducto);
    }
    this.#actualizarCarrito(detalles);
  }

  limpiarCarrito() {
    this.#actualizar({
      carrito: { total: 0, operacionesDetalle: [], descuentos: [] },
      puntos: { ...this.#estado.puntos, aplicados: 0 }
    });
  }

  aplicarPuntos(usar: boolean) {
    const { acumulados } = this.#estado.puntos;
    // Si 'usar' es true, aplicamos todos los puntos; si no, 0.
    this.#actualizar({
      puntos: { ...this.#estado.puntos, aplicados: usar ? acumulados : 0 }
    });
    // Es vital recalcular para que el total del carrito baje
    this.#recalcularTotales();
  }
  #actualizarCarrito(detalles: ItemCarrito[]) {
    this.#actualizar({
        carrito: { ...this.#estado.carrito, operacionesDetalle: detalles }
    });
    this.#recalcularTotales();
  }

  #recalcularTotales() {
    const subtotal = this.#estado.carrito.operacionesDetalle.reduce((acc, d) => acc + d.subtotal, 0);
    const descPuntos = this.#estado.puntos.aplicados;
    const descPromos = this.#estado.carrito.descuentos.reduce((acc, desc) => acc + desc.valor, 0);

    this.#actualizar({
      carrito: {
        ...this.#estado.carrito,
        total: Math.max(0, subtotal - descPuntos - descPromos)
      }
    });
  }

  // --- 3. PROCESOS DE RED (API) ---

  async abrirCaja() {
    if (this.#estado.arbolCategorias.length > 0) return;
    this.#actualizar({ loading: true });
    try {
      const [tree, todos] = await Promise.all([
        categoriasService.getArbolCategorias(),
        productosService.getAll()
      ]);
      this.#actualizar({ 
        arbolCategorias: tree, 
        productosSugeridos: todos.slice(0, 15) 
      });
    } finally {
      this.#actualizar({ loading: false });
    }
  }

  /**
   * COBRAR: Envío atómico al backend
   */
  async cobrar(): Promise<RespuestaCobro | { success: false }> {
    const { carrito, user } = this.#estado;
    if (carrito.operacionesDetalle.length === 0) return { success: false };

    // Guardamos el total antes de procesar para la respuesta final
    const totalVenta = carrito.total;

    this.#actualizar({ loading: true });

    try {
      const payload = {
        idCliente: user?.idCliente || null,
        idUsuario: user?.id || null, 
        detalles: carrito.operacionesDetalle.map(item => ({
          idProducto: item.idProducto,
          cantidad: item.cantidad,
          precioUnitario: item.precioUnitario
        })),
        metodoPago: 'EFECTIVO',
        total: totalVenta
      };

      const res = await operacionesService.crearOperacion(payload);

      if (res) {
        // Importante: NO reseteamos aquí, reseteamos cuando el usuario 
        // pulse "Finalizar" en el ticket para que no desaparezca la info antes de tiempo.
        return { 
          success: true, 
          idOperacion: res.idOperacion, 
          total: totalVenta 
        };
      }
      
      return { success: false };

    } catch (error) {
      console.error("Error en cobro:", error);
      return { success: false };
    } finally {
      this.#actualizar({ loading: false });
    }
  }

  /**
   * Limpieza total para el siguiente cliente
   */
  resetSistema() {
    this.#actualizar({
      carrito: { total: 0, operacionesDetalle: [], descuentos: [] },
      puntos: { acumulados: 0, aplicados: 0 },
      user: null,
      loading: false
    });
    localStorage.removeItem('kiosko_session');
  }
  
  #actualizar(parcial: Partial<KioskeroEstado>) {
    this.#estado = { ...this.#estado, ...parcial };
    this.#notificar();
  }

  #notificar() { this.#oyentes.forEach(o => o()); }

  suscribir(callback: () => void) {
    this.#oyentes.add(callback);
    return () => this.#oyentes.delete(callback);
  }
}

export const kioskero = new KioskeroController();