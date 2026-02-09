import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ActividadOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ActividadOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadOrderByRelationAggregateInput>;
export const ActividadOrderByRelationAggregateInputObjectZodSchema = makeSchema();
