import { z } from "zod";

export const createProductoSchema = z.object({
  nombre: z.string().min(1),
  descripcion: z.string().optional(),
  idCategoria: z.number().int().positive(),
});


export type ProductoCreateDTO = z.infer<typeof createProductoSchema>;

export const updateProductoSchema = createProductoSchema.partial();

export type ProductoUpdateDTO = z.infer<typeof updateProductoSchema>;

// Esquema para la paginación
export const PaginacionProductosSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  categoriaId: z.coerce.number().int().positive().optional().nullable(),
});

// Tipo inferido del esquema
export type PaginacionProductosDto = z.infer<typeof PaginacionProductosSchema>;

// Esquema para la respuesta
export const PaginacionResponseSchema = <T extends z.ZodType>(itemSchema: T) => 
  z.object({
    items: z.array(itemSchema),
    total: z.number().int().nonnegative(),
  });

export type PaginacionResponse<T> = {
  items: T[];
  total: number;
};

// Esquema para producto (ajustado al schema de Prisma)
export const ProductoSchema = z.object({
  idProducto: z.number(),
  nombre: z.string(),
  descripcion: z.string().nullable().optional(),
  activo: z.boolean(),
  precios: z.number().or(z.string()).transform(val => 
    typeof val === 'string' ? parseFloat(val) : val
  ),
  stock: z.number().int(),
  idCategoria: z.number(),
  categoria: z.object({
    idCategoria: z.number(),
    nombre: z.string(),
  }).optional(),
  imagenes: z.array(z.object({
    idImagen: z.number(),
    url: z.string(),
    orden: z.number(),
    activo: z.boolean(),
  })).optional(),
  // Campos de timestamp si los tienes
  // createdAt: z.date().optional(),
  // updatedAt: z.date().optional(),
});

export type Producto = z.infer<typeof ProductoSchema>;