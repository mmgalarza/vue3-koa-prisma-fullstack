import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UsuarioEmpresaCountOrderByAggregateInputObjectSchema as UsuarioEmpresaCountOrderByAggregateInputObjectSchema } from './UsuarioEmpresaCountOrderByAggregateInput.schema';
import { UsuarioEmpresaAvgOrderByAggregateInputObjectSchema as UsuarioEmpresaAvgOrderByAggregateInputObjectSchema } from './UsuarioEmpresaAvgOrderByAggregateInput.schema';
import { UsuarioEmpresaMaxOrderByAggregateInputObjectSchema as UsuarioEmpresaMaxOrderByAggregateInputObjectSchema } from './UsuarioEmpresaMaxOrderByAggregateInput.schema';
import { UsuarioEmpresaMinOrderByAggregateInputObjectSchema as UsuarioEmpresaMinOrderByAggregateInputObjectSchema } from './UsuarioEmpresaMinOrderByAggregateInput.schema';
import { UsuarioEmpresaSumOrderByAggregateInputObjectSchema as UsuarioEmpresaSumOrderByAggregateInputObjectSchema } from './UsuarioEmpresaSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idUsuarioEmpresa: SortOrderSchema.optional(),
  idUsuario: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  rol: SortOrderSchema.optional(),
  _count: z.lazy(() => UsuarioEmpresaCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => UsuarioEmpresaAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UsuarioEmpresaMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UsuarioEmpresaMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => UsuarioEmpresaSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UsuarioEmpresaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaOrderByWithAggregationInput>;
export const UsuarioEmpresaOrderByWithAggregationInputObjectZodSchema = makeSchema();
