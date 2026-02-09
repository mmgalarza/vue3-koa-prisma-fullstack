import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idVenta: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  idCliente: SortOrderSchema.optional(),
  idListaPvp: SortOrderSchema.optional()
}).strict();
export const VentaSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VentaSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaSumOrderByAggregateInput>;
export const VentaSumOrderByAggregateInputObjectZodSchema = makeSchema();
