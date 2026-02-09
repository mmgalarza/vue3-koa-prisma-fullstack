import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idTalon: SortOrderSchema.optional()
}).strict();
export const TiposDocSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TiposDocSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocSumOrderByAggregateInput>;
export const TiposDocSumOrderByAggregateInputObjectZodSchema = makeSchema();
