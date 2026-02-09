import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { UsuariosCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema as UsuariosCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosCreateNestedOneWithoutUsuarioEmpresasInput.schema'

const makeSchema = () => z.object({
  rol: RolUsuarioSchema.optional(),
  usuario: z.lazy(() => UsuariosCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema)
}).strict();
export const UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaCreateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaCreateWithoutEmpresaInput>;
export const UsuarioEmpresaCreateWithoutEmpresaInputObjectZodSchema = makeSchema();
