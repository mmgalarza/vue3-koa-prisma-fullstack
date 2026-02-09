import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idVenta: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  idCliente: SortOrderSchema.optional(),
  idListaPvp: SortOrderSchema.optional()
}).strict();
export const VentaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VentaAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaAvgOrderByAggregateInput>;
export const VentaAvgOrderByAggregateInputObjectZodSchema = makeSchema();
