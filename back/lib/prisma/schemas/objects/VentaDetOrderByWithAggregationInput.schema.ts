import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VentaDetCountOrderByAggregateInputObjectSchema as VentaDetCountOrderByAggregateInputObjectSchema } from './VentaDetCountOrderByAggregateInput.schema';
import { VentaDetAvgOrderByAggregateInputObjectSchema as VentaDetAvgOrderByAggregateInputObjectSchema } from './VentaDetAvgOrderByAggregateInput.schema';
import { VentaDetMaxOrderByAggregateInputObjectSchema as VentaDetMaxOrderByAggregateInputObjectSchema } from './VentaDetMaxOrderByAggregateInput.schema';
import { VentaDetMinOrderByAggregateInputObjectSchema as VentaDetMinOrderByAggregateInputObjectSchema } from './VentaDetMinOrderByAggregateInput.schema';
import { VentaDetSumOrderByAggregateInputObjectSchema as VentaDetSumOrderByAggregateInputObjectSchema } from './VentaDetSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idVentaDet: SortOrderSchema.optional(),
  idVenta: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  cantidad: SortOrderSchema.optional(),
  precioUnit: SortOrderSchema.optional(),
  descuento: SortOrderSchema.optional(),
  _count: z.lazy(() => VentaDetCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => VentaDetAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => VentaDetMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => VentaDetMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => VentaDetSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VentaDetOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.VentaDetOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetOrderByWithAggregationInput>;
export const VentaDetOrderByWithAggregationInputObjectZodSchema = makeSchema();
