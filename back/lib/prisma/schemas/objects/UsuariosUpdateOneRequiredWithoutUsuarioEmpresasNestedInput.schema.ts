import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema as UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosCreateWithoutUsuarioEmpresasInput.schema';
import { UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema as UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosUncheckedCreateWithoutUsuarioEmpresasInput.schema';
import { UsuariosCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema as UsuariosCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosCreateOrConnectWithoutUsuarioEmpresasInput.schema';
import { UsuariosUpsertWithoutUsuarioEmpresasInputObjectSchema as UsuariosUpsertWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosUpsertWithoutUsuarioEmpresasInput.schema';
import { UsuariosWhereUniqueInputObjectSchema as UsuariosWhereUniqueInputObjectSchema } from './UsuariosWhereUniqueInput.schema';
import { UsuariosUpdateToOneWithWhereWithoutUsuarioEmpresasInputObjectSchema as UsuariosUpdateToOneWithWhereWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosUpdateToOneWithWhereWithoutUsuarioEmpresasInput.schema';
import { UsuariosUpdateWithoutUsuarioEmpresasInputObjectSchema as UsuariosUpdateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosUpdateWithoutUsuarioEmpresasInput.schema';
import { UsuariosUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema as UsuariosUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema } from './UsuariosUncheckedUpdateWithoutUsuarioEmpresasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UsuariosCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema).optional(),
  upsert: z.lazy(() => UsuariosUpsertWithoutUsuarioEmpresasInputObjectSchema).optional(),
  connect: z.lazy(() => UsuariosWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UsuariosUpdateToOneWithWhereWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => UsuariosUpdateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => UsuariosUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema)]).optional()
}).strict();
export const UsuariosUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema: z.ZodType<Prisma.UsuariosUpdateOneRequiredWithoutUsuarioEmpresasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosUpdateOneRequiredWithoutUsuarioEmpresasNestedInput>;
export const UsuariosUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectZodSchema = makeSchema();
