import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idLista: SortOrderSchema.optional(),
  idProveedor: SortOrderSchema.optional()
}).strict();
export const ListasAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListasAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasAvgOrderByAggregateInput>;
export const ListasAvgOrderByAggregateInputObjectZodSchema = makeSchema();
