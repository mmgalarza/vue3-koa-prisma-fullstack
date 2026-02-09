import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idTalon: SortOrderSchema.optional(),
  inicio: SortOrderSchema.optional(),
  fin: SortOrderSchema.optional(),
  actual: SortOrderSchema.optional()
}).strict();
export const TalonariosSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TalonariosSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosSumOrderByAggregateInput>;
export const TalonariosSumOrderByAggregateInputObjectZodSchema = makeSchema();
