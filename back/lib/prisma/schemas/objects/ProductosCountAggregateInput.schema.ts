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
  activo: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProductosCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductosCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCountAggregateInputType>;
export const ProductosCountAggregateInputObjectZodSchema = makeSchema();
