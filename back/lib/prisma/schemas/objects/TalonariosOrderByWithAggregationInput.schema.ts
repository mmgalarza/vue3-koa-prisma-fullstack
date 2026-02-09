import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TalonariosCountOrderByAggregateInputObjectSchema as TalonariosCountOrderByAggregateInputObjectSchema } from './TalonariosCountOrderByAggregateInput.schema';
import { TalonariosAvgOrderByAggregateInputObjectSchema as TalonariosAvgOrderByAggregateInputObjectSchema } from './TalonariosAvgOrderByAggregateInput.schema';
import { TalonariosMaxOrderByAggregateInputObjectSchema as TalonariosMaxOrderByAggregateInputObjectSchema } from './TalonariosMaxOrderByAggregateInput.schema';
import { TalonariosMinOrderByAggregateInputObjectSchema as TalonariosMinOrderByAggregateInputObjectSchema } from './TalonariosMinOrderByAggregateInput.schema';
import { TalonariosSumOrderByAggregateInputObjectSchema as TalonariosSumOrderByAggregateInputObjectSchema } from './TalonariosSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idTalon: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  inicio: SortOrderSchema.optional(),
  fin: SortOrderSchema.optional(),
  actual: SortOrderSchema.optional(),
  _count: z.lazy(() => TalonariosCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TalonariosAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TalonariosMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TalonariosMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TalonariosSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TalonariosOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TalonariosOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosOrderByWithAggregationInput>;
export const TalonariosOrderByWithAggregationInputObjectZodSchema = makeSchema();
