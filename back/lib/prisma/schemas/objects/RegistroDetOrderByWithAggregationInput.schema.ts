import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RegistroDetCountOrderByAggregateInputObjectSchema as RegistroDetCountOrderByAggregateInputObjectSchema } from './RegistroDetCountOrderByAggregateInput.schema';
import { RegistroDetAvgOrderByAggregateInputObjectSchema as RegistroDetAvgOrderByAggregateInputObjectSchema } from './RegistroDetAvgOrderByAggregateInput.schema';
import { RegistroDetMaxOrderByAggregateInputObjectSchema as RegistroDetMaxOrderByAggregateInputObjectSchema } from './RegistroDetMaxOrderByAggregateInput.schema';
import { RegistroDetMinOrderByAggregateInputObjectSchema as RegistroDetMinOrderByAggregateInputObjectSchema } from './RegistroDetMinOrderByAggregateInput.schema';
import { RegistroDetSumOrderByAggregateInputObjectSchema as RegistroDetSumOrderByAggregateInputObjectSchema } from './RegistroDetSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idRegistroDet: SortOrderSchema.optional(),
  idRegistro: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  idAlmacen: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  flujoAlmacen: SortOrderSchema.optional(),
  cantidad: SortOrderSchema.optional(),
  _count: z.lazy(() => RegistroDetCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RegistroDetAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RegistroDetMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RegistroDetMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RegistroDetSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RegistroDetOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RegistroDetOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetOrderByWithAggregationInput>;
export const RegistroDetOrderByWithAggregationInputObjectZodSchema = makeSchema();
