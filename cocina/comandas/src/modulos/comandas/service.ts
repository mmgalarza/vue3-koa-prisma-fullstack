import { CocinaAPI } from './api';
import { 
  AccionCogerProductoSchema, 
  AccionServirProductoSchema,
  type Comanda,
  type EstadoComanda
} from './schema.zod.2';

/**
 * @description Servicio de orquestación para el módulo de Cocina.
 * Valida los datos antes de enviarlos a la API y gestiona errores.
 */
export const serviceCocina = {
  
  /**
   * Obtiene el listado completo de comandas para el tablero.
   */
  async getAll(): Promise<Comanda[]> {
    try {
      return await CocinaAPI.listarComandas();
    } catch (error) {
      console.error('Error al cargar tablero de cocina:', error);
      throw error;
    }
  },

  /**
   * Filtra comandas por un estado específico.
   */
  async getPorEstado(estado: EstadoComanda): Promise<Comanda[]> {
    try {
      return await CocinaAPI.filtrarPorEstado(estado);
    } catch (error) {
      console.error(`Error al filtrar comandas por ${estado}:`, error);
      throw error;
    }
  },

  /**
   * Proceso de reclamar un producto (Coger).
   * Valida mediante Zod que se envíen los IDs correctos.
   */
  async cogerPedido(idDetalleComanda: number, idCocinero: number) {
    const payload = { idDetalleComanda, idCocinero };
    const validation = AccionCogerProductoSchema.safeParse(payload);
    
    if (!validation.success) {
      throw new Error(validation.error.issues[0].message);
    }

    try {
      return await CocinaAPI.cogerProducto(payload);
    } catch (error) {
      console.error('Error al coger pedido:', error);
      throw error;
    }
  },

  /**
   * Proceso de entrega parcial o total de un producto (Servir).
   */
  async servirPedido(idDetalleComanda: number, servido: number, idCocinero: number) {
    const payload = { idDetalleComanda, servido, idCocinero };
    const validation = AccionServirProductoSchema.safeParse(payload);

    if (!validation.success) {
      throw new Error(validation.error.issues[0].message);
    }

    try {
      return await CocinaAPI.servirProducto(  payload );
    } catch (error) {
      console.error('Error al servir pedido:', error);
      throw error;
    }
  },

  /**
   * Libera un producto que estaba asignado a un cocinero sin haberlo terminado.
   */
  async liberarPedido(idDetalleComanda: number, idCocinero: number) {
    try {
      return await CocinaAPI.liberarProducto({ idDetalleComanda, idCocinero });
    } catch (error) {
      console.error('Error al liberar pedido:', error);
      throw error;
    }
  },

  /**
   * Anulación de comanda (generalmente por cancelación de pago).
   */
  async anular(idComanda: number) {
    try {
      return await CocinaAPI.anularComanda(idComanda);
    } catch (error) {
      console.error('Error al anular comanda:', error);
      throw error;
    }
  }
};