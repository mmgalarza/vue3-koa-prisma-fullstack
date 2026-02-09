import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VentaCountOrderByAggregateInputObjectSchema as VentaCountOrderByAggregateInputObjectSchema } from './VentaCountOrderByAggregateInput.schema';
import { VentaAvgOrderByAggregateInputObjectSchema as VentaAvgOrderByAggregateInputObjectSchema } from './VentaAvgOrderByAggregateInput.schema';
import { VentaMaxOrderByAggregateInputObjectSchema as VentaMaxOrderByAggregateInputObjectSchema } from './VentaMaxOrderByAggregateInput.schema';
import { VentaMinOrderByAggregateInputObjectSchema as VentaMinOrderByAggregateInputObjectSchema } from './VentaMinOrderByAggregateInput.schema';
import { VentaSumOrderByAggregateInputObjectSchema as VentaSumOrderByAggregateInputObjectSchema } from './VentaSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idVenta: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  idCliente: SortOrderSchema.optional(),
  idListaPvp: SortOrderSchema.optional(),
  _count: z.lazy(() => VentaCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => VentaAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => VentaMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => VentaMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => VentaSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VentaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.VentaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaOrderByWithAggregationInput>;
export const VentaOrderByWithAggregationInputObjectZodSchema = makeSchema();
