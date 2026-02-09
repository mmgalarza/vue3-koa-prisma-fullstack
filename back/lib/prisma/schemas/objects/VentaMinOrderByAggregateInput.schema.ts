import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idVenta: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  idCliente: SortOrderSchema.optional(),
  idListaPvp: SortOrderSchema.optional()
}).strict();
export const VentaMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VentaMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaMinOrderByAggregateInput>;
export const VentaMinOrderByAggregateInputObjectZodSchema = makeSchema();
