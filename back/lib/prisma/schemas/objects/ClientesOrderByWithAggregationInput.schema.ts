import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientesCountOrderByAggregateInputObjectSchema as ClientesCountOrderByAggregateInputObjectSchema } from './ClientesCountOrderByAggregateInput.schema';
import { ClientesAvgOrderByAggregateInputObjectSchema as ClientesAvgOrderByAggregateInputObjectSchema } from './ClientesAvgOrderByAggregateInput.schema';
import { ClientesMaxOrderByAggregateInputObjectSchema as ClientesMaxOrderByAggregateInputObjectSchema } from './ClientesMaxOrderByAggregateInput.schema';
import { ClientesMinOrderByAggregateInputObjectSchema as ClientesMinOrderByAggregateInputObjectSchema } from './ClientesMinOrderByAggregateInput.schema';
import { ClientesSumOrderByAggregateInputObjectSchema as ClientesSumOrderByAggregateInputObjectSchema } from './ClientesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idCliente: SortOrderSchema.optional(),
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
  _count: z.lazy(() => ClientesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ClientesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ClientesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ClientesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ClientesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ClientesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ClientesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesOrderByWithAggregationInput>;
export const ClientesOrderByWithAggregationInputObjectZodSchema = makeSchema();
