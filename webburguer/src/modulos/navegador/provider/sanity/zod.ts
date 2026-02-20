import { z } from 'zod';

export const SanityProductoSchema = z.object({
  _id: z.string(),
  nombre: z.string(),
  precio: z.number(),
  // .nullable() permite que Sanity devuelva null sin que Zod explote
  slug: z.string().nullable().optional(), 
  categoria: z.object({
    nombre: z.string(),
    familia: z.string().optional(),
    madre: z.string().optional(),
  }).optional(),
  imagen: z.any().optional(), // El asset de Sanity
});

export type SanityProductoDTO = z.infer<typeof SanityProductoSchema>;