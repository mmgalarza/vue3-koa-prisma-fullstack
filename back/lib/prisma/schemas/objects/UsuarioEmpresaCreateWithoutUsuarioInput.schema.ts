import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { EmpresasCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema as EmpresasCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasCreateNestedOneWithoutUsuarioEmpresasInput.schema'

const makeSchema = () => z.object({
  rol: RolUsuarioSchema.optional(),
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema)
}).strict();
export const UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaCreateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaCreateWithoutUsuarioInput>;
export const UsuarioEmpresaCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
