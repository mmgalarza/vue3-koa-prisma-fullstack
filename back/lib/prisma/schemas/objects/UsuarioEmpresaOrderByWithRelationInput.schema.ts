import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UsuariosOrderByWithRelationInputObjectSchema as UsuariosOrderByWithRelationInputObjectSchema } from './UsuariosOrderByWithRelationInput.schema';
import { EmpresasOrderByWithRelationInputObjectSchema as EmpresasOrderByWithRelationInputObjectSchema } from './EmpresasOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  idUsuarioEmpresa: SortOrderSchema.optional(),
  idUsuario: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  rol: SortOrderSchema.optional(),
  usuario: z.lazy(() => UsuariosOrderByWithRelationInputObjectSchema).optional(),
  empresa: z.lazy(() => EmpresasOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const UsuarioEmpresaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaOrderByWithRelationInput>;
export const UsuarioEmpresaOrderByWithRelationInputObjectZodSchema = makeSchema();
