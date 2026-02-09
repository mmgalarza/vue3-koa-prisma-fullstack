import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idProducto: z.number().int().optional(),
  nombre: z.string().max(120),
  idCategoria: z.number().int().optional(),
  descripcion: z.string().max(200).optional().nullable(),
  imagen: z.string().max(100).optional().nullable(),
  codigo: z.string().max(40).optional().nullable(),
  unidad: z.string().max(20).optional().nullable(),
  activo: z.boolean().optional()
}).strict();
export const ProductosCreateManyInputObjectSchema: z.ZodType<Prisma.ProductosCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateManyInput>;
export const ProductosCreateManyInputObjectZodSchema = makeSchema();
