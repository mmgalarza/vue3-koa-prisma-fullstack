import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UsuarioEmpresaOrderByRelationAggregateInputObjectSchema as UsuarioEmpresaOrderByRelationAggregateInputObjectSchema } from './UsuarioEmpresaOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idUsuario: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  activo: SortOrderSchema.optional(),
  creadoEn: SortOrderSchema.optional(),
  actualizadoEn: SortOrderSchema.optional(),
  UsuarioEmpresas: z.lazy(() => UsuarioEmpresaOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UsuariosOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UsuariosOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosOrderByWithRelationInput>;
export const UsuariosOrderByWithRelationInputObjectZodSchema = makeSchema();
