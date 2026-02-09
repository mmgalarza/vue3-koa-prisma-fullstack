import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProductosOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProductosOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosOrderByRelationAggregateInput>;
export const ProductosOrderByRelationAggregateInputObjectZodSchema = makeSchema();
