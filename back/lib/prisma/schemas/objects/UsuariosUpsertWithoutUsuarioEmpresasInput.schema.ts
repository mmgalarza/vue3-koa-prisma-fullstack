import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuariosUpdateWithoutUsuarioEmpresasInputObjectSchema as UsuariosUpdateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosUpdateWithoutUsuarioEmpresasInput.schema';
import { UsuariosUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema as UsuariosUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosUncheckedUpdateWithoutUsuarioEmpresasInput.schema';
import { UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema as UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosCreateWithoutUsuarioEmpresasInput.schema';
import { UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema as UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosUncheckedCreateWithoutUsuarioEmpresasInput.schema';
import { UsuariosWhereInputObjectSchema as UsuariosWhereInputObjectSchema } from './UsuariosWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UsuariosUpdateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => UsuariosUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema)]),
  create: z.union([z.lazy(() => UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema)]),
  where: z.lazy(() => UsuariosWhereInputObjectSchema).optional()
}).strict();
export const UsuariosUpsertWithoutUsuarioEmpresasInputObjectSchema: z.ZodType<Prisma.UsuariosUpsertWithoutUsuarioEmpresasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosUpsertWithoutUsuarioEmpresasInput>;
export const UsuariosUpsertWithoutUsuarioEmpresasInputObjectZodSchema = makeSchema();
