import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RegistroCountOrderByAggregateInputObjectSchema as RegistroCountOrderByAggregateInputObjectSchema } from './RegistroCountOrderByAggregateInput.schema';
import { RegistroAvgOrderByAggregateInputObjectSchema as RegistroAvgOrderByAggregateInputObjectSchema } from './RegistroAvgOrderByAggregateInput.schema';
import { RegistroMaxOrderByAggregateInputObjectSchema as RegistroMaxOrderByAggregateInputObjectSchema } from './RegistroMaxOrderByAggregateInput.schema';
import { RegistroMinOrderByAggregateInputObjectSchema as RegistroMinOrderByAggregateInputObjectSchema } from './RegistroMinOrderByAggregateInput.schema';
import { RegistroSumOrderByAggregateInputObjectSchema as RegistroSumOrderByAggregateInputObjectSchema } from './RegistroSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idRegistro: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  numero: SortOrderSchema.optional(),
  idTipoDoc: SortOrderSchema.optional(),
  idVenta: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  idActividad: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => RegistroCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RegistroAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RegistroMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RegistroMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RegistroSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RegistroOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RegistroOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroOrderByWithAggregationInput>;
export const RegistroOrderByWithAggregationInputObjectZodSchema = makeSchema();
