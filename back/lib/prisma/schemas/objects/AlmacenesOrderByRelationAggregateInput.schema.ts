import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AlmacenesOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AlmacenesOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesOrderByRelationAggregateInput>;
export const AlmacenesOrderByRelationAggregateInputObjectZodSchema = makeSchema();
