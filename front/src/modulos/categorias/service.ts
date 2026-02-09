import { apiCategorias } from './api'
import { 
  CreateCategoriaSchema, 
  UpdateCategoriaSchema, 
  GetCategoriasTreeSchema 
} from './schema.zod'
import type { 
  CreateCategoriaRequest, 
  UpdateCategoriaRequest,
  CategoriaQueryParams
} from './types'

export const categoriasService = {
  /**
   * Obtiene y valida el árbol de categorías
   */
  async getTree() {
    const response = await apiCategorias.getTree();
    // Validamos la respuesta del servidor con Zod
    return GetCategoriasTreeSchema.parse(response);
  },

  /**
   * Crea una categoría validando los datos de entrada
   */
  async create(payload: CreateCategoriaRequest) {
    const validData = CreateCategoriaSchema.parse(payload);
    return await apiCategorias.create(validData);
  },

  /**
   * Actualiza una categoría validando los datos parciales
   */
  async update(id: number, payload: UpdateCategoriaRequest) {
    const validData = UpdateCategoriaSchema.parse(payload);
    return await apiCategorias.update(id, validData);
  },

  /**
   * Obtiene madres con filtros opcionales
   */
  async getMadres(idFamilia?: number) {
    const params: CategoriaQueryParams = { idFamilia };
    return await apiCategorias.getMadres(params);
  },

  /**
   * Obtiene hijas con filtros opcionales
   */
  async getHijas(idMadre?: number) {
    const params: CategoriaQueryParams = { idMadre };
    return await apiCategorias.getHijas(params);
  },

  /**
   * Elimina una categoría
   */
  async delete(id: number) {
    if (!id) throw new Error('ID de categoría no proporcionado');
    return await apiCategorias.delete(id);
  },

  /**
   * Desactivación lógica
   */
  async desactivar(id: number) {
    return await apiCategorias.desactivar(id);
  }
}

