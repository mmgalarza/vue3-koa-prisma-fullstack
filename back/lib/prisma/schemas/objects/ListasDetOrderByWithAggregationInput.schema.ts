import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ListasDetCountOrderByAggregateInputObjectSchema as ListasDetCountOrderByAggregateInputObjectSchema } from './ListasDetCountOrderByAggregateInput.schema';
import { ListasDetAvgOrderByAggregateInputObjectSchema as ListasDetAvgOrderByAggregateInputObjectSchema } from './ListasDetAvgOrderByAggregateInput.schema';
import { ListasDetMaxOrderByAggregateInputObjectSchema as ListasDetMaxOrderByAggregateInputObjectSchema } from './ListasDetMaxOrderByAggregateInput.schema';
import { ListasDetMinOrderByAggregateInputObjectSchema as ListasDetMinOrderByAggregateInputObjectSchema } from './ListasDetMinOrderByAggregateInput.schema';
import { ListasDetSumOrderByAggregateInputObjectSchema as ListasDetSumOrderByAggregateInputObjectSchema } from './ListasDetSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idListaDet: SortOrderSchema.optional(),
  idLista: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  precio: SortOrderSchema.optional(),
  descuento: SortOrderSchema.optional(),
  _count: z.lazy(() => ListasDetCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ListasDetAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ListasDetMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ListasDetMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ListasDetSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ListasDetOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ListasDetOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetOrderByWithAggregationInput>;
export const ListasDetOrderByWithAggregationInputObjectZodSchema = makeSchema();
