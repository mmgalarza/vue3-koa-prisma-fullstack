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
export const ListasDetCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListasDetCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetCountOrderByAggregateInput>;
export const ListasDetCountOrderByAggregateInputObjectZodSchema = makeSchema();
