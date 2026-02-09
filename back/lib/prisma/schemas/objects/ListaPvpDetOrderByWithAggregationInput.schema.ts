import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ListaPvpDetCountOrderByAggregateInputObjectSchema as ListaPvpDetCountOrderByAggregateInputObjectSchema } from './ListaPvpDetCountOrderByAggregateInput.schema';
import { ListaPvpDetAvgOrderByAggregateInputObjectSchema as ListaPvpDetAvgOrderByAggregateInputObjectSchema } from './ListaPvpDetAvgOrderByAggregateInput.schema';
import { ListaPvpDetMaxOrderByAggregateInputObjectSchema as ListaPvpDetMaxOrderByAggregateInputObjectSchema } from './ListaPvpDetMaxOrderByAggregateInput.schema';
import { ListaPvpDetMinOrderByAggregateInputObjectSchema as ListaPvpDetMinOrderByAggregateInputObjectSchema } from './ListaPvpDetMinOrderByAggregateInput.schema';
import { ListaPvpDetSumOrderByAggregateInputObjectSchema as ListaPvpDetSumOrderByAggregateInputObjectSchema } from './ListaPvpDetSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idListaPvpDet: SortOrderSchema.optional(),
  idListaPvp: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  precioVenta: SortOrderSchema.optional(),
  _count: z.lazy(() => ListaPvpDetCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ListaPvpDetAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ListaPvpDetMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ListaPvpDetMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ListaPvpDetSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ListaPvpDetOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ListaPvpDetOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetOrderByWithAggregationInput>;
export const ListaPvpDetOrderByWithAggregationInputObjectZodSchema = makeSchema();
