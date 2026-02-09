import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CategoriasOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CategoriasOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasOrderByRelationAggregateInput>;
export const CategoriasOrderByRelationAggregateInputObjectZodSchema = makeSchema();
