import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idListaPvpDet: SortOrderSchema.optional(),
  idListaPvp: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  precioVenta: SortOrderSchema.optional()
}).strict();
export const ListaPvpDetCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListaPvpDetCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetCountOrderByAggregateInput>;
export const ListaPvpDetCountOrderByAggregateInputObjectZodSchema = makeSchema();
