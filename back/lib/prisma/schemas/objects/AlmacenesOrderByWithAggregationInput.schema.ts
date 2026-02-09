import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AlmacenesCountOrderByAggregateInputObjectSchema as AlmacenesCountOrderByAggregateInputObjectSchema } from './AlmacenesCountOrderByAggregateInput.schema';
import { AlmacenesAvgOrderByAggregateInputObjectSchema as AlmacenesAvgOrderByAggregateInputObjectSchema } from './AlmacenesAvgOrderByAggregateInput.schema';
import { AlmacenesMaxOrderByAggregateInputObjectSchema as AlmacenesMaxOrderByAggregateInputObjectSchema } from './AlmacenesMaxOrderByAggregateInput.schema';
import { AlmacenesMinOrderByAggregateInputObjectSchema as AlmacenesMinOrderByAggregateInputObjectSchema } from './AlmacenesMinOrderByAggregateInput.schema';
import { AlmacenesSumOrderByAggregateInputObjectSchema as AlmacenesSumOrderByAggregateInputObjectSchema } from './AlmacenesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idAlmacen: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  interno: SortOrderSchema.optional(),
  calle: SortOrderSchema.optional(),
  numero: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ciudad: SortOrderSchema.optional(),
  provincia: SortOrderSchema.optional(),
  codigoPostal: SortOrderSchema.optional(),
  pais: SortOrderSchema.optional(),
  responsable: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  activo: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  _count: z.lazy(() => AlmacenesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AlmacenesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AlmacenesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AlmacenesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AlmacenesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AlmacenesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AlmacenesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesOrderByWithAggregationInput>;
export const AlmacenesOrderByWithAggregationInputObjectZodSchema = makeSchema();
