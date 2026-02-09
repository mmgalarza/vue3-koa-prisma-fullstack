import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idVentaDet: SortOrderSchema.optional(),
  idVenta: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  cantidad: SortOrderSchema.optional(),
  precioUnit: SortOrderSchema.optional(),
  descuento: SortOrderSchema.optional()
}).strict();
export const VentaDetSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VentaDetSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetSumOrderByAggregateInput>;
export const VentaDetSumOrderByAggregateInputObjectZodSchema = makeSchema();
