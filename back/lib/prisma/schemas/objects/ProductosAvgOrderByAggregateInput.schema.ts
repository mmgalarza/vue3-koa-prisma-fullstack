import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idProducto: SortOrderSchema.optional(),
  idCategoria: SortOrderSchema.optional()
}).strict();
export const ProductosAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductosAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosAvgOrderByAggregateInput>;
export const ProductosAvgOrderByAggregateInputObjectZodSchema = makeSchema();
