import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idListaDet: SortOrderSchema.optional(),
  idLista: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  precio: SortOrderSchema.optional(),
  descuento: SortOrderSchema.optional()
}).strict();
export const ListasDetMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListasDetMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetMinOrderByAggregateInput>;
export const ListasDetMinOrderByAggregateInputObjectZodSchema = makeSchema();
