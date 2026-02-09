import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TiposDocCountOrderByAggregateInputObjectSchema as TiposDocCountOrderByAggregateInputObjectSchema } from './TiposDocCountOrderByAggregateInput.schema';
import { TiposDocAvgOrderByAggregateInputObjectSchema as TiposDocAvgOrderByAggregateInputObjectSchema } from './TiposDocAvgOrderByAggregateInput.schema';
import { TiposDocMaxOrderByAggregateInputObjectSchema as TiposDocMaxOrderByAggregateInputObjectSchema } from './TiposDocMaxOrderByAggregateInput.schema';
import { TiposDocMinOrderByAggregateInputObjectSchema as TiposDocMinOrderByAggregateInputObjectSchema } from './TiposDocMinOrderByAggregateInput.schema';
import { TiposDocSumOrderByAggregateInputObjectSchema as TiposDocSumOrderByAggregateInputObjectSchema } from './TiposDocSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  movAlmacen: SortOrderSchema.optional(),
  idTalon: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => TiposDocCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TiposDocAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TiposDocMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TiposDocMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TiposDocSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TiposDocOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TiposDocOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocOrderByWithAggregationInput>;
export const TiposDocOrderByWithAggregationInputObjectZodSchema = makeSchema();
