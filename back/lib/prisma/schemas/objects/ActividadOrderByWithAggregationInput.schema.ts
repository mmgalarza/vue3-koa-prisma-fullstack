import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ActividadCountOrderByAggregateInputObjectSchema as ActividadCountOrderByAggregateInputObjectSchema } from './ActividadCountOrderByAggregateInput.schema';
import { ActividadAvgOrderByAggregateInputObjectSchema as ActividadAvgOrderByAggregateInputObjectSchema } from './ActividadAvgOrderByAggregateInput.schema';
import { ActividadMaxOrderByAggregateInputObjectSchema as ActividadMaxOrderByAggregateInputObjectSchema } from './ActividadMaxOrderByAggregateInput.schema';
import { ActividadMinOrderByAggregateInputObjectSchema as ActividadMinOrderByAggregateInputObjectSchema } from './ActividadMinOrderByAggregateInput.schema';
import { ActividadSumOrderByAggregateInputObjectSchema as ActividadSumOrderByAggregateInputObjectSchema } from './ActividadSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idActividad: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  inicio: SortOrderSchema.optional(),
  fin: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  activa: SortOrderSchema.optional(),
  _count: z.lazy(() => ActividadCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ActividadAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ActividadMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ActividadMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ActividadSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ActividadOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ActividadOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadOrderByWithAggregationInput>;
export const ActividadOrderByWithAggregationInputObjectZodSchema = makeSchema();
