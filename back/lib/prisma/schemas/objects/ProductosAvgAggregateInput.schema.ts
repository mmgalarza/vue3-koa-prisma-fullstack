import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idProducto: z.literal(true).optional(),
  idCategoria: z.literal(true).optional()
}).strict();
export const ProductosAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProductosAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductosAvgAggregateInputType>;
export const ProductosAvgAggregateInputObjectZodSchema = makeSchema();
