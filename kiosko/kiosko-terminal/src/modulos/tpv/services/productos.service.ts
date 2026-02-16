import { api } from '../api';
import { 
  ProductoSchema, 
  type Producto 
} from '../types';
import { z } from 'zod';

/**
 * Servicio de Productos
 * Gestiona el catálogo y el filtrado para el Kiosko.
 */
export const productosService = {
  
  /**
   * Obtiene todos los productos activos (Carga inicial)
   * Endpoint: GET /api/productos/all
   */
  async getAll(): Promise<Producto[]> {
    const response = await api.get<Producto[]>('/api/productos/all');
    
    // Validamos el array de productos
    const parsed = z.array(ProductoSchema).safeParse(response);
    
    if (!parsed.success) {
      console.error('Error validando catálogo de productos:', parsed.error);
      throw new Error('Error de integridad en los datos de productos.');
    }
    
    return parsed.data;
  },

  /**
   * Obtiene productos filtrados por categoría (FAMILIA, MADRE o HIJA)
   * Endpoint: GET /api/productos/categoria/{id}
   */
  async getByCategoria(idCategoria: number): Promise<Producto[]> {
    const response = await api.get<Producto[]>(`/api/productos/categoria/${idCategoria}`);
    return z.array(ProductoSchema).parse(response);
  },

  /**
   * Obtiene lista paginada de productos
   * Endpoint: GET /api/productos?page=1&limit=10&categoriaId=X
   */
  async getPaginado(params: { page?: number; limit?: number; categoriaId?: number }) {
    const response = await api.get<{ items: Producto[]; total: number }>('/api/productos', params);
    
    return {
      items: z.array(ProductoSchema).parse(response.items),
      total: response.total
    };
  },

  /**
   * Detalle de un producto por ID
   */
  async getById(id: number): Promise<Producto> {
    const response = await api.get<Producto>(`/api/productos/${id}`);
    return ProductoSchema.parse(response);
  },

  /**
   * Crea un producto (ADMIN)
   */
  async crear(data: Partial<Producto>): Promise<Producto> {
    const response = await api.post<Producto>('/api/productos', data);
    return ProductoSchema.parse(response);
  }
};