import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ListasDetOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ListasDetOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetOrderByRelationAggregateInput>;
export const ListasDetOrderByRelationAggregateInputObjectZodSchema = makeSchema();
