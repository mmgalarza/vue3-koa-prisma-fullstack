import { z } from 'zod';

/**
 * Esquema base para CategoriaTipo (Enum)
 */
export const CategoriaTipoSchema = z.enum(['FAMILIA', 'MADRE', 'HIJA']);

/**
 * Esquema recursivo para la entidad Categoria
 * Usamos z.lazy() para permitir la autorreferencia en subcategorias
 */
export const CategoriaSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    idCategoria: z.number().int(),
    nombre: z.string().min(1, 'El nombre es obligatorio'),
    descripcion: z.string().nullable(),
    icono: z.string().nullable(),
    tipo: CategoriaTipoSchema,
    activo: z.boolean(),
    idCategoriaPadre: z.number().int().nullable(),
    subcategorias: z.array(CategoriaSchema).optional(),
  })
);

/**
 * Esquema para la creación de una nueva categoría
 */
export const CreateCategoriaSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio').max(100),
  descripcion: z.string().optional(),
  icono: z.string().optional(),
  tipo: CategoriaTipoSchema,
  idCategoriaPadre: z.number().int().nullable(),
});

/**
 * Esquema para la actualización parcial (PATCH)
 */
export const UpdateCategoriaSchema = z.object({
  nombre: z.string().min(1).max(100).optional(),
  descripcion: z.string().optional(),
  icono: z.string().optional(),
  activo: z.boolean().optional(),
  idCategoriaPadre: z.number().int().nullable().optional(),
});

/**
 * Esquemas para las respuestas de la API (Validación de carga)
 */
export const GetCategoriasTreeSchema = z.object({
  familias: z.array(CategoriaSchema),
});

export const GetCategoriasMadresSchema = z.object({
  madres: z.array(CategoriaSchema),
});

export const GetCategoriasHijasSchema = z.object({
  hijas: z.array(CategoriaSchema),
});

// Inferir tipos de Zod si fuera necesario (opcional, ya tenemos types.ts)
export type CreateCategoriaInput = z.infer<typeof CreateCategoriaSchema>;
export type UpdateCategoriaInput = z.infer<typeof UpdateCategoriaSchema>;