import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idTalon: SortOrderSchema.optional(),
  inicio: SortOrderSchema.optional(),
  fin: SortOrderSchema.optional(),
  actual: SortOrderSchema.optional()
}).strict();
export const TalonariosAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TalonariosAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosAvgOrderByAggregateInput>;
export const TalonariosAvgOrderByAggregateInputObjectZodSchema = makeSchema();
