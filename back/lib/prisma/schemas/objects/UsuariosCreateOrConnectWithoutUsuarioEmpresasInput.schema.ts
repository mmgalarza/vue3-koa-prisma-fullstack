import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuariosWhereUniqueInputObjectSchema as UsuariosWhereUniqueInputObjectSchema } from './UsuariosWhereUniqueInput.schema';
import { UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema as UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosCreateWithoutUsuarioEmpresasInput.schema';
import { UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema as UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosUncheckedCreateWithoutUsuarioEmpresasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuariosWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema)])
}).strict();
export const UsuariosCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema: z.ZodType<Prisma.UsuariosCreateOrConnectWithoutUsuarioEmpresasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosCreateOrConnectWithoutUsuarioEmpresasInput>;
export const UsuariosCreateOrConnectWithoutUsuarioEmpresasInputObjectZodSchema = makeSchema();
