import { z } from "zod";

export const ProductoImagenCreateSchema = z.object({
  idProducto: z.number(),
  url: z.string().min(1),
  alt: z.string().optional(),
  orden: z.number().optional().default(1),
  principal: z.boolean().optional().default(false),
  activo: z.boolean().optional().default(true),
});

export type ProductoImagenCreateDTO = z.infer<typeof ProductoImagenCreateSchema>;

export const ProductoImagenUpdateSchema = z.object({
  url: z.string().optional(),
  alt: z.string().optional(),
  orden: z.number().optional(),
  principal: z.boolean().optional(),
  activo: z.boolean().optional(),
});

export type ProductoImagenUpdateDTO = z.infer<typeof ProductoImagenUpdateSchema>;
