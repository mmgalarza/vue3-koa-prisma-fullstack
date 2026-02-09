import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UsuariosCountOrderByAggregateInputObjectSchema as UsuariosCountOrderByAggregateInputObjectSchema } from './UsuariosCountOrderByAggregateInput.schema';
import { UsuariosAvgOrderByAggregateInputObjectSchema as UsuariosAvgOrderByAggregateInputObjectSchema } from './UsuariosAvgOrderByAggregateInput.schema';
import { UsuariosMaxOrderByAggregateInputObjectSchema as UsuariosMaxOrderByAggregateInputObjectSchema } from './UsuariosMaxOrderByAggregateInput.schema';
import { UsuariosMinOrderByAggregateInputObjectSchema as UsuariosMinOrderByAggregateInputObjectSchema } from './UsuariosMinOrderByAggregateInput.schema';
import { UsuariosSumOrderByAggregateInputObjectSchema as UsuariosSumOrderByAggregateInputObjectSchema } from './UsuariosSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idUsuario: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  activo: SortOrderSchema.optional(),
  creadoEn: SortOrderSchema.optional(),
  actualizadoEn: SortOrderSchema.optional(),
  _count: z.lazy(() => UsuariosCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => UsuariosAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UsuariosMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UsuariosMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => UsuariosSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UsuariosOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UsuariosOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosOrderByWithAggregationInput>;
export const UsuariosOrderByWithAggregationInputObjectZodSchema = makeSchema();
