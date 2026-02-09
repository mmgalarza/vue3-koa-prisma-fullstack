import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idListaPvp: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const ListaPvpAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListaPvpAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpAvgOrderByAggregateInput>;
export const ListaPvpAvgOrderByAggregateInputObjectZodSchema = makeSchema();
