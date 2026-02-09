import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const VentaDetOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.VentaDetOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetOrderByRelationAggregateInput>;
export const VentaDetOrderByRelationAggregateInputObjectZodSchema = makeSchema();
