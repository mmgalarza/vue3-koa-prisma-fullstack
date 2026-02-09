import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ListaPvpCountOrderByAggregateInputObjectSchema as ListaPvpCountOrderByAggregateInputObjectSchema } from './ListaPvpCountOrderByAggregateInput.schema';
import { ListaPvpAvgOrderByAggregateInputObjectSchema as ListaPvpAvgOrderByAggregateInputObjectSchema } from './ListaPvpAvgOrderByAggregateInput.schema';
import { ListaPvpMaxOrderByAggregateInputObjectSchema as ListaPvpMaxOrderByAggregateInputObjectSchema } from './ListaPvpMaxOrderByAggregateInput.schema';
import { ListaPvpMinOrderByAggregateInputObjectSchema as ListaPvpMinOrderByAggregateInputObjectSchema } from './ListaPvpMinOrderByAggregateInput.schema';
import { ListaPvpSumOrderByAggregateInputObjectSchema as ListaPvpSumOrderByAggregateInputObjectSchema } from './ListaPvpSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idListaPvp: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  criterio: SortOrderSchema.optional(),
  fechaGen: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  _count: z.lazy(() => ListaPvpCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ListaPvpAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ListaPvpMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ListaPvpMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ListaPvpSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ListaPvpOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ListaPvpOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpOrderByWithAggregationInput>;
export const ListaPvpOrderByWithAggregationInputObjectZodSchema = makeSchema();
