import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idListaPvpDet: SortOrderSchema.optional(),
  idListaPvp: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  precioVenta: SortOrderSchema.optional()
}).strict();
export const ListaPvpDetAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListaPvpDetAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetAvgOrderByAggregateInput>;
export const ListaPvpDetAvgOrderByAggregateInputObjectZodSchema = makeSchema();
