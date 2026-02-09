import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idTalon: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  inicio: SortOrderSchema.optional(),
  fin: SortOrderSchema.optional(),
  actual: SortOrderSchema.optional()
}).strict();
export const TalonariosCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TalonariosCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosCountOrderByAggregateInput>;
export const TalonariosCountOrderByAggregateInputObjectZodSchema = makeSchema();
