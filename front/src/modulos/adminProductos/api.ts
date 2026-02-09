import { get, post, patch, del } from '@auth/api-v2'
import type { 
  Categoria,
  Producto,
  CreateProductoInput,
  PaginatedResponse,
  // Tipos que deben existir en types.ts basados en tu modelo de categorías:
  GetCategoriasTreeResponse,
  GetCategoriasMadresResponse,
  GetCategoriasHijasResponse,
  CreateCategoriaRequest,
  UpdateCategoriaRequest,
  CategoriaQueryParams
} from './types'

/* ENDPOINTS */
const URL_PRODUCTOS = '/api/productos'
const URL_CATEGORIAS = '/api/categorias'

/**
 * API DE PRODUCTOS
 */
export const apiProductos = {
  /**
   * Obtiene todos los productos activos (público, sin paginación)
   */
  getAll: () => 
    get<Producto[]>(`${URL_PRODUCTOS}/all`),

  /**
   * Lista productos con paginación y filtros
   */
  getPaged: (params?: { page?: number; limit?: number; categoriaId?: number }) => 
    get<PaginatedResponse<Producto>>(URL_PRODUCTOS, params ),

  /**
   * Crea un producto (ADMIN)
   */
  create: (data: CreateProductoInput) => 
    post<Producto>(URL_PRODUCTOS, data),

  /**
   * Obtiene productos por categoría
   */
  getByCategoria: (idCategoria: number) => 
    get<Producto[]>(`${URL_PRODUCTOS}/categoria/${idCategoria}`),

  /**
   * Obtiene detalle de un producto
   */
  getById: (id: number) => 
    get<Producto>(`${URL_PRODUCTOS}/${id}`),
  /**
   * Actualiza un producto existente
   */
  update: (id: number, data: Partial<CreateProductoInput>) => 
    patch<Producto>(`${URL_PRODUCTOS}/${id}`, data),

  /**
   * Elimina un producto físicamente
   */
  delete: (id: number) => 
    del<any>(`${URL_PRODUCTOS}/${id}`),

}

/**
 * API DE CATEGORÍAS
 */
export const apiCategorias = {
  /**
   * Árbol completo: familias -> madres -> hijas
   */
  getTree: () => 
    get<GetCategoriasTreeResponse>(URL_CATEGORIAS),

  /**
   * Crea categoría (ADMIN)
   */
  create: (data: CreateCategoriaRequest) => 
    post<Categoria>(URL_CATEGORIAS, data),

  /**
   * Obtiene categorías MADRE
   */
  getMadres: (params?: CategoriaQueryParams) => 
    get<GetCategoriasMadresResponse>(`${URL_CATEGORIAS}/madres`, { params }),

  /**
   * Obtiene categorías HIJA
   */
  getHijas: (params?: CategoriaQueryParams) => 
    get<GetCategoriasHijasResponse>(`${URL_CATEGORIAS}/hijas`, { params }),

  /**
   * Detalle por ID
   */
  getById: (id: number) => 
    get<Categoria>(`${URL_CATEGORIAS}/${id}`),

  /**
   * Actualización parcial
   */
  update: (id: number, data: UpdateCategoriaRequest) => 
    patch<Categoria>(`${URL_CATEGORIAS}/${id}`, data),

  /**
   * Elimina físicamente
   */
  delete: (id: number) => 
    del<any>(`${URL_CATEGORIAS}/${id}`),

  /**
   * Borrado lógico
   */
  desactivar: (id: number) => 
    patch<any>(`${URL_CATEGORIAS}/${id}/desactivar`),
  
}

// api.ts - Agregar estos métodos al objeto apiProductos

