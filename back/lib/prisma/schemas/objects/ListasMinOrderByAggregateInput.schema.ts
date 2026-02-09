import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idLista: SortOrderSchema.optional(),
  idProveedor: SortOrderSchema.optional(),
  refNo: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  observacion: SortOrderSchema.optional()
}).strict();
export const ListasMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListasMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasMinOrderByAggregateInput>;
export const ListasMinOrderByAggregateInputObjectZodSchema = makeSchema();
