import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idProducto: SortOrderSchema.optional(),
  idCategoria: SortOrderSchema.optional()
}).strict();
export const ProductosSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductosSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosSumOrderByAggregateInput>;
export const ProductosSumOrderByAggregateInputObjectZodSchema = makeSchema();
