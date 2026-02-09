import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ListaPvpDetOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ListaPvpDetOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetOrderByRelationAggregateInput>;
export const ListaPvpDetOrderByRelationAggregateInputObjectZodSchema = makeSchema();
