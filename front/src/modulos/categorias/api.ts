import { get, post, patch, del } from '@auth/api-v2'
import type { 
  Categoria,
  GetCategoriasTreeResponse,
  GetCategoriasMadresResponse,
  GetCategoriasHijasResponse,
  CreateCategoriaRequest,
  UpdateCategoriaRequest,
  CategoriaQueryParams
} from './types'

/* CATEGORIAS API */
const endpoint = '/api/categorias'

export const apiCategorias = {
    /**
     * Obtiene el árbol completo: familias -> madres -> hijas
     */
    getTree: () => 
        get<GetCategoriasTreeResponse>(endpoint),

    /**
     * Crea una nueva categoría (FAMILIA, MADRE o HIJA)
     */
    create: (data: CreateCategoriaRequest) => 
        post<Categoria>(endpoint, data),

    /**
     * Obtiene categorías de tipo MADRE (opcional filtrar por idFamilia)
     */
    getMadres: (params?: CategoriaQueryParams) => 
        get<GetCategoriasMadresResponse>(`${endpoint}/madres`, { params }),

    /**
     * Obtiene categorías de tipo HIJA (opcional filtrar por idMadre)
     */
    getHijas: (params?: CategoriaQueryParams) => 
        get<GetCategoriasHijasResponse>(`${endpoint}/hijas`, { params }),

    /**
     * Obtiene el detalle de una categoría por ID
     */
    getById: (id: number) => 
        get<Categoria>(`${endpoint}/${id}`),

    /**
     * Actualización parcial de una categoría
     */
    update: (id: number, data: UpdateCategoriaRequest) => 
        patch<Categoria>(`${endpoint}/${id}`, data),

    /**
     * Elimina físicamente una categoría
     */
    delete: (id: number) => 
        del<any>(`${endpoint}/${id}`),

    /**
     * Desactiva una categoría (borrado lógico)
     */
    desactivar: (id: number) => 
        patch<any>(`${endpoint}/${id}/desactivar`),
}