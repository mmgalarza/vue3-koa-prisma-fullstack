import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ClientesOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ClientesOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesOrderByRelationAggregateInput>;
export const ClientesOrderByRelationAggregateInputObjectZodSchema = makeSchema();
