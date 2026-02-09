import { z } from 'zod';

import type { 
  Categoria, 
  GetCategoriasTreeResponse,
  GetCategoriasMadresResponse,
  GetCategoriasHijasResponse,
  CreateCategoriaRequest,
  UpdateCategoriaRequest,
  CategoriaQueryParams
} from '../categorias/types';

// RE-EXPORTAMOS para que api.ts pueda encontrarlos en "./types"
export type { 
  Categoria, 
  GetCategoriasTreeResponse,
  GetCategoriasMadresResponse,
  GetCategoriasHijasResponse,
  CreateCategoriaRequest,
  UpdateCategoriaRequest,
  CategoriaQueryParams
};

// --- Respuestas de API ---
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
}

export interface ErrorResponse {
  error: string;
  message: string;
}

// --- Esquemas de Producto e Imagen ---


export const ProductoImagenSchema = z.object({
  idImagen: z.number().int(),
  url: z.string().url(),
  alt: z.string().nullable().optional(),
  orden: z.number().int().optional(),
  principal: z.boolean(),
  activo: z.boolean(),
  createdAt: z.string().datetime().optional(),
});

export type ProductoImagen = z.infer<typeof ProductoImagenSchema>;

export const ProductoSchema = z.object({
  idProducto: z.number().int(),
  nombre: z.string().min(1, "El nombre es requerido"),
  descripcion: z.string().nullable().optional(),
  precios: z.number().min(0, "El precio no puede ser negativo"),
  stock: z.number().int().min(0, "El stock no puede ser negativo"),
  activo: z.boolean(),
  idCategoria: z.number().int().min(1, "Categoría inválida"),
  categoria: z.record(z.string(), z.any()).optional(),
  imagenes: z.array(ProductoImagenSchema).optional(),
});

export type Producto = z.infer<typeof ProductoSchema>;

export const CreateProductoSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  descripcion: z.string().optional().nullable(),
  precios: z.number().min(0),
  stock: z.number().int().min(0),
  idCategoria: z.number().int().min(1),
});

export type CreateProductoInput = z.infer<typeof CreateProductoSchema>;

// --- Genéricos ---
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
}