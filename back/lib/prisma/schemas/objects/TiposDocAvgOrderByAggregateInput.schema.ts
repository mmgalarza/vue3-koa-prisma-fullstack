import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idTalon: SortOrderSchema.optional()
}).strict();
export const TiposDocAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TiposDocAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocAvgOrderByAggregateInput>;
export const TiposDocAvgOrderByAggregateInputObjectZodSchema = makeSchema();
