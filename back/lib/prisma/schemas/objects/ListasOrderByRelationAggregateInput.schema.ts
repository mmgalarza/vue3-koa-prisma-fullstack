import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ListasOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ListasOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasOrderByRelationAggregateInput>;
export const ListasOrderByRelationAggregateInputObjectZodSchema = makeSchema();
