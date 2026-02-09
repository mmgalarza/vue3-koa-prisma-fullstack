import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './UsuarioEmpresaWhereUniqueInput.schema';
import { UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema as UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaCreateWithoutUsuarioInput.schema';
import { UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema as UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUncheckedCreateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema)])
}).strict();
export const UsuarioEmpresaCreateOrConnectWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaCreateOrConnectWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaCreateOrConnectWithoutUsuarioInput>;
export const UsuarioEmpresaCreateOrConnectWithoutUsuarioInputObjectZodSchema = makeSchema();
