import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProveedoresCountOrderByAggregateInputObjectSchema as ProveedoresCountOrderByAggregateInputObjectSchema } from './ProveedoresCountOrderByAggregateInput.schema';
import { ProveedoresAvgOrderByAggregateInputObjectSchema as ProveedoresAvgOrderByAggregateInputObjectSchema } from './ProveedoresAvgOrderByAggregateInput.schema';
import { ProveedoresMaxOrderByAggregateInputObjectSchema as ProveedoresMaxOrderByAggregateInputObjectSchema } from './ProveedoresMaxOrderByAggregateInput.schema';
import { ProveedoresMinOrderByAggregateInputObjectSchema as ProveedoresMinOrderByAggregateInputObjectSchema } from './ProveedoresMinOrderByAggregateInput.schema';
import { ProveedoresSumOrderByAggregateInputObjectSchema as ProveedoresSumOrderByAggregateInputObjectSchema } from './ProveedoresSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idProveedor: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  calle: SortOrderSchema.optional(),
  numero: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ciudad: SortOrderSchema.optional(),
  provincia: SortOrderSchema.optional(),
  codigoPostal: SortOrderSchema.optional(),
  pais: SortOrderSchema.optional(),
  contacto: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  activo: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  _count: z.lazy(() => ProveedoresCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProveedoresAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProveedoresMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProveedoresMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProveedoresSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProveedoresOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProveedoresOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresOrderByWithAggregationInput>;
export const ProveedoresOrderByWithAggregationInputObjectZodSchema = makeSchema();
