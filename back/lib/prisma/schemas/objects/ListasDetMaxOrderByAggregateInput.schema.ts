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
export const ListasDetMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListasDetMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetMaxOrderByAggregateInput>;
export const ListasDetMaxOrderByAggregateInputObjectZodSchema = makeSchema();
