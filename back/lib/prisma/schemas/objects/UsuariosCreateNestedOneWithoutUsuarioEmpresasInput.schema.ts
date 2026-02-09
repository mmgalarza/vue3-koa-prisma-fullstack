import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema as UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosCreateWithoutUsuarioEmpresasInput.schema';
import { UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema as UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosUncheckedCreateWithoutUsuarioEmpresasInput.schema';
import { UsuariosCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema as UsuariosCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosCreateOrConnectWithoutUsuarioEmpresasInput.schema';
import { UsuariosWhereUniqueInputObjectSchema as UsuariosWhereUniqueInputObjectSchema } from './UsuariosWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UsuariosCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema).optional(),
  connect: z.lazy(() => UsuariosWhereUniqueInputObjectSchema).optional()
}).strict();
export const UsuariosCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema: z.ZodType<Prisma.UsuariosCreateNestedOneWithoutUsuarioEmpresasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosCreateNestedOneWithoutUsuarioEmpresasInput>;
export const UsuariosCreateNestedOneWithoutUsuarioEmpresasInputObjectZodSchema = makeSchema();
