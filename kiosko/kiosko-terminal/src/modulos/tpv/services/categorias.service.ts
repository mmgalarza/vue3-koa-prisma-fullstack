import { api } from '../api';
import { 
  CategoriaSchema, 
  type Categoria 
} from '../types';
import { z } from 'zod';

/**
 * Servicio de Categorías
 * Encargado de la comunicación y validación de datos jerárquicos.
 */
export const categoriasService = {
  
  /**
   * Obtiene el árbol completo de familias -> madres -> hijas
   * Endpoint: GET /api/categorias
   */
  async getArbolCategorias(): Promise<Categoria[]> {
    const response = await api.get<{ familias: Categoria[] }>('/api/categorias');
    
    // Validamos la respuesta con Zod para asegurar la integridad del árbol
    const parsed = z.array(CategoriaSchema).safeParse(response.familias);
    
    if (!parsed.success) {
      console.error('Error de validación en Árbol de Categorías:', parsed.error);
      throw new Error('La estructura de categorías del servidor es inválida.');
    }
    
    return parsed.data;
  },

  /**
   * Obtiene el detalle de una categoría específica y sus subcategorías
   * Endpoint: GET /api/categorias/{id}
   */
  async getById(id: number): Promise<Categoria> {
    const response = await api.get<Categoria>(`/api/categorias/${id}`);
    return CategoriaSchema.parse(response);
  },

  /**
   * Filtra categorías por tipo MADRE (opcionalmente por familia)
   * Endpoint: GET /api/categorias/madres?idFamilia=X
   */
  async getMadres(idFamilia?: number): Promise<Categoria[]> {
    const response = await api.get<{ madres: Categoria[] }>('/api/categorias/madres', { idFamilia });
    return z.array(CategoriaSchema).parse(response.madres);
  },

  /**
   * Crea una nueva categoría (Requiere ADMIN)
   */
  async crearCategoria(data: Partial<Categoria>): Promise<Categoria> {
    const response = await api.post<Categoria>('/api/categorias', data);
    return CategoriaSchema.parse(response);
  },

  /**
   * Desactiva una categoría (Borrado lógico)
   */
  async desactivar(id: number): Promise<boolean> {
    const response = await api.patch<{ ok: boolean }>(`/api/categorias/${id}/desactivar`);
    return !!response;
  }
};