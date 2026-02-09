import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './UsuarioEmpresaWhereUniqueInput.schema';
import { UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema as UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaCreateWithoutEmpresaInput.schema';
import { UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema as UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const UsuarioEmpresaCreateOrConnectWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaCreateOrConnectWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaCreateOrConnectWithoutEmpresaInput>;
export const UsuarioEmpresaCreateOrConnectWithoutEmpresaInputObjectZodSchema = makeSchema();
