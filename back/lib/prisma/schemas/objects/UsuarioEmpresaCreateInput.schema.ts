import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { UsuariosCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema as UsuariosCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosCreateNestedOneWithoutUsuarioEmpresasInput.schema';
import { EmpresasCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema as EmpresasCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasCreateNestedOneWithoutUsuarioEmpresasInput.schema'

const makeSchema = () => z.object({
  rol: RolUsuarioSchema.optional(),
  usuario: z.lazy(() => UsuariosCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema),
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema)
}).strict();
export const UsuarioEmpresaCreateInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaCreateInput>;
export const UsuarioEmpresaCreateInputObjectZodSchema = makeSchema();
