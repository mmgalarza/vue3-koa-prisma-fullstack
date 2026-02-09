import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idProducto: z.literal(true).optional(),
  nombre: z.literal(true).optional(),
  idCategoria: z.literal(true).optional(),
  descripcion: z.literal(true).optional(),
  imagen: z.literal(true).optional(),
  codigo: z.literal(true).optional(),
  unidad: z.literal(true).optional(),
  activo: z.literal(true).optional()
}).strict();
export const ProductosMinAggregateInputObjectSchema: z.ZodType<Prisma.ProductosMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductosMinAggregateInputType>;
export const ProductosMinAggregateInputObjectZodSchema = makeSchema();
