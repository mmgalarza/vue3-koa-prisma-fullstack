import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuariosWhereInputObjectSchema as UsuariosWhereInputObjectSchema } from './UsuariosWhereInput.schema';
import { UsuariosUpdateWithoutUsuarioEmpresasInputObjectSchema as UsuariosUpdateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosUpdateWithoutUsuarioEmpresasInput.schema';
import { UsuariosUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema as UsuariosUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosUncheckedUpdateWithoutUsuarioEmpresasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuariosWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UsuariosUpdateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => UsuariosUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema)])
}).strict();
export const UsuariosUpdateToOneWithWhereWithoutUsuarioEmpresasInputObjectSchema: z.ZodType<Prisma.UsuariosUpdateToOneWithWhereWithoutUsuarioEmpresasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosUpdateToOneWithWhereWithoutUsuarioEmpresasInput>;
export const UsuariosUpdateToOneWithWhereWithoutUsuarioEmpresasInputObjectZodSchema = makeSchema();
