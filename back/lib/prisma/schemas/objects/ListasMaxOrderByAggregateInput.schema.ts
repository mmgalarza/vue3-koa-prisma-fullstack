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
export const ListasMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListasMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasMaxOrderByAggregateInput>;
export const ListasMaxOrderByAggregateInputObjectZodSchema = makeSchema();
