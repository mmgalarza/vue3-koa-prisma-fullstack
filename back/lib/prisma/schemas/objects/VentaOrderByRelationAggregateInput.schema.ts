import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const VentaOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.VentaOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaOrderByRelationAggregateInput>;
export const VentaOrderByRelationAggregateInputObjectZodSchema = makeSchema();
