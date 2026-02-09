import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RegistroOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RegistroOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroOrderByRelationAggregateInput>;
export const RegistroOrderByRelationAggregateInputObjectZodSchema = makeSchema();
