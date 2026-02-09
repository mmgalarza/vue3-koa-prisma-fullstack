import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProveedoresOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProveedoresOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresOrderByRelationAggregateInput>;
export const ProveedoresOrderByRelationAggregateInputObjectZodSchema = makeSchema();
