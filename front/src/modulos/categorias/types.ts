/**
 * Tipos base para la entidad Categoria
 */
export type CategoriaTipo = 'FAMILIA' | 'MADRE' | 'HIJA';

export interface Categoria {
  idCategoria: number;
  nombre: string;
  descripcion: string | null;
  icono: string | null;
  tipo: CategoriaTipo;
  activo: boolean;
  idCategoriaPadre: number | null;
  subcategorias?: Categoria[];
}

/**
 * RESPONSES (Contratos de salida de la API)
 */

// GET /api/categorias
export interface GetCategoriasTreeResponse {
  familias: Categoria[];
}

// GET /api/categorias/madres
export interface GetCategoriasMadresResponse {
  madres: Categoria[];
}

// GET /api/categorias/hijas
export interface GetCategoriasHijasResponse {
  hijas: Categoria[];
}

// Errores genéricos
export interface ApiErrorResponse {
  error: string;
  message?: string;
}

/**
 * REQUESTS (Contratos de entrada para la API)
 */

// POST /api/categorias
export interface CreateCategoriaRequest {
  nombre: string;
  descripcion?: string;
  icono?: string;
  tipo: CategoriaTipo;
  idCategoriaPadre: number | null;
}

// PATCH /api/categorias/{id}
export interface UpdateCategoriaRequest {
  nombre?: string;
  descripcion?: string;
  icono?: string;
  activo?: boolean;
  idCategoriaPadre?: number | null;
}

/**
 * PARAMS
 */
export interface CategoriaQueryParams {
  idFamilia?: number;
  idMadre?: number;
}