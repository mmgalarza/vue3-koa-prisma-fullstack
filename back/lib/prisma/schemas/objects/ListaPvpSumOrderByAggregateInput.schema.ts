import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idListaPvp: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const ListaPvpSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListaPvpSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpSumOrderByAggregateInput>;
export const ListaPvpSumOrderByAggregateInputObjectZodSchema = makeSchema();
