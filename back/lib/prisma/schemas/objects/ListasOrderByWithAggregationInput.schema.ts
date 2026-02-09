import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ListasCountOrderByAggregateInputObjectSchema as ListasCountOrderByAggregateInputObjectSchema } from './ListasCountOrderByAggregateInput.schema';
import { ListasAvgOrderByAggregateInputObjectSchema as ListasAvgOrderByAggregateInputObjectSchema } from './ListasAvgOrderByAggregateInput.schema';
import { ListasMaxOrderByAggregateInputObjectSchema as ListasMaxOrderByAggregateInputObjectSchema } from './ListasMaxOrderByAggregateInput.schema';
import { ListasMinOrderByAggregateInputObjectSchema as ListasMinOrderByAggregateInputObjectSchema } from './ListasMinOrderByAggregateInput.schema';
import { ListasSumOrderByAggregateInputObjectSchema as ListasSumOrderByAggregateInputObjectSchema } from './ListasSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idLista: SortOrderSchema.optional(),
  idProveedor: SortOrderSchema.optional(),
  refNo: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  observacion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ListasCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ListasAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ListasMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ListasMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ListasSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ListasOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ListasOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasOrderByWithAggregationInput>;
export const ListasOrderByWithAggregationInputObjectZodSchema = makeSchema();
