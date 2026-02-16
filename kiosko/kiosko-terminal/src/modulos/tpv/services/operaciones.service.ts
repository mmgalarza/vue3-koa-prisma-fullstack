import { api } from '../api';
import { 
  OperacionSchema, 
  OperacionDetalleSchema,
  type Operacion, 
  type OperacionDetalle,
  type Cliente 
} from '../types';
import { z } from 'zod';

export const operacionesService = {


  
  /**
   * 1. POST /api/operaciones
   * Crea la cabecera BORRADOR. 
   * idCliente es opcional para permitir compras anónimas.
   */
  async crearOperacion(data: any): Promise<Operacion> {
    // Una sola petición al endpoint que procesa todo
    const response = await api.post<Operacion>('/api/operaciones/full', data);
    return OperacionSchema.parse(response);
  },
    
  async iniciarOperacion(idCliente?: number | null): Promise<Operacion> {
    // Si no hay idCliente, se envía como null para que el backend cree una venta Guest
    const response = await api.post<Operacion>('/api/operaciones', { idCliente: idCliente ?? null });
    return OperacionSchema.parse(response);
  },

  /**
   * 2. POST /api/operaciones/{id}/detalles
   */
  async agregarProducto(idOperacion: number, detalle: { 
    idProducto: number; 
    cantidad: number; 
    precioUnitario: number 
  }): Promise<OperacionDetalle> {
    const response = await api.post<OperacionDetalle>(
      `/api/operaciones/${idOperacion}/detalles`, 
      detalle
    );
    return OperacionDetalleSchema.parse(response);
  },

  /**
   * 3. POST /api/operaciones/{id}/confirmar
   * Asocia el cliente final (opcional) y cierra la venta.
   */
  async confirmarOperacion(idOperacion: number, payload: {
    usuarioId?: number | null; // El cajero/terminal que confirma
    cliente?: Partial<Cliente> | null; // Datos del cliente si se capturan al final
  }): Promise<Operacion> {
    const response = await api.post<Operacion>(
      `/api/operaciones/${idOperacion}/confirmar`,
      payload
    );
    return OperacionSchema.parse(response);
  },

  /**
   * 4. PATCH /api/operaciones/{id}/detalles/{idDetalle}
   */
  async actualizarCantidad(idOperacion: number, idDetalle: number, data: {
    cantidad: number;
    precioUnitario: number;
  }): Promise<OperacionDetalle> {
    const response = await api.patch<OperacionDetalle>(
      `/api/operaciones/${idOperacion}/detalles/${idDetalle}`,
      data
    );
    return OperacionDetalleSchema.parse(response);
  },

  /**
   * 5. DELETE /api/operaciones/{id}/detalles/{idDetalle}
   */
  async eliminarProducto(idOperacion: number, idDetalle: number): Promise<boolean> {
    // Ajustado a la respuesta del controlador: { deleted: true }
    const response = await api.del<{ deleted: boolean }>(
      `/api/operaciones/${idOperacion}/detalles/${idDetalle}`
    );
    return response.deleted;
  },

  /**
   * 6. GET /api/operaciones/cliente/{idCliente}
   */
  async getHistorialCliente(idCliente: number, params: { page?: number; limit?: number }) {
    const response = await api.get<{ data: any[]; meta: any }>(
      `/api/operaciones/cliente/${idCliente}`,
      params
    );
    
    return {
      operaciones: z.array(OperacionSchema).parse(response.data),
      meta: response.meta
    };
  },

  /**
   * 7. GET /api/operaciones/{id}
   */
  async getById(id: number): Promise<Operacion> {
    const response = await api.get<Operacion>(`/api/operaciones/${id}`);
    return OperacionSchema.parse(response);
  },   
};