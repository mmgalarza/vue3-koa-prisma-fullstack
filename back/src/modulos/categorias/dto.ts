// categorias.dto.ts
import { z } from "zod"
import { TCategoria } from "@prisma/prisma/enums"

export const TCategoriaSchema = z.nativeEnum(TCategoria)

/**
 * DTO - Crear Categoría
 */
export const CategoriaCreateSchema = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es obligatorio"),

  descripcion: z
    .string()
    .optional(),

  icono: z
    .string()
    .optional(),

  tipo: TCategoriaSchema,

  /**
   * - FAMILIA → null
   * - MADRE   → id de FAMILIA
   * - HIJA    → id de MADRE
   * 
   * Validación semántica en el service
   */
  idCategoriaPadre: z
    .number()
    .int()
    .positive()
    .nullable()
    .optional(),
})

export type CategoriaCreateDTO = z.infer<typeof CategoriaCreateSchema>

/**
 * DTO - Actualizar Categoría (PATCH)
 * 
 * NOTAS:
 * - No se permite cambiar el tipo
 * - El cambio de padre se valida en el service
 */
export const CategoriaUpdateSchema = z.object({
  nombre: z
    .string()
    .min(1)
    .optional(),

  descripcion: z
    .string()
    .optional(),

  icono: z
    .string()
    .optional(),

  activo: z
    .boolean()
    .optional(),

  idCategoriaPadre: z
    .number()
    .int()
    .positive()
    .nullable()
    .optional(),
})

export type CategoriaUpdateDTO = z.infer<typeof CategoriaUpdateSchema>

/**
 * DTO - Query params (listado / filtros)
 * Útil para GET /categorias
 */
export const CategoriaQuerySchema = z.object({
  tipo: TCategoriaSchema.optional(),
  activo: z.boolean().optional(),
  idCategoriaPadre: z.number().int().positive().optional(),
})

export type CategoriaQueryDTO = z.infer<typeof CategoriaQuerySchema>
