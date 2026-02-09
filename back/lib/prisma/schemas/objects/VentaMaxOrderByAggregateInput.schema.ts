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
export const VentaMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VentaMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaMaxOrderByAggregateInput>;
export const VentaMaxOrderByAggregateInputObjectZodSchema = makeSchema();
