import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idProducto: z.literal(true).optional(),
  idCategoria: z.literal(true).optional()
}).strict();
export const ProductosSumAggregateInputObjectSchema: z.ZodType<Prisma.ProductosSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductosSumAggregateInputType>;
export const ProductosSumAggregateInputObjectZodSchema = makeSchema();
