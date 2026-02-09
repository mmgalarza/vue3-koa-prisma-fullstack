import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FacturaCountOrderByAggregateInputObjectSchema as FacturaCountOrderByAggregateInputObjectSchema } from './FacturaCountOrderByAggregateInput.schema';
import { FacturaAvgOrderByAggregateInputObjectSchema as FacturaAvgOrderByAggregateInputObjectSchema } from './FacturaAvgOrderByAggregateInput.schema';
import { FacturaMaxOrderByAggregateInputObjectSchema as FacturaMaxOrderByAggregateInputObjectSchema } from './FacturaMaxOrderByAggregateInput.schema';
import { FacturaMinOrderByAggregateInputObjectSchema as FacturaMinOrderByAggregateInputObjectSchema } from './FacturaMinOrderByAggregateInput.schema';
import { FacturaSumOrderByAggregateInputObjectSchema as FacturaSumOrderByAggregateInputObjectSchema } from './FacturaSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idVenta: SortOrderSchema.optional(),
  cae: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  vencCae: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  neto: SortOrderSchema.optional(),
  iva: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  _count: z.lazy(() => FacturaCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => FacturaAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FacturaMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FacturaMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => FacturaSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FacturaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FacturaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaOrderByWithAggregationInput>;
export const FacturaOrderByWithAggregationInputObjectZodSchema = makeSchema();
