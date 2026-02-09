import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema as UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaCreateWithoutUsuarioInput.schema';
import { UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema as UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUncheckedCreateWithoutUsuarioInput.schema';
import { UsuarioEmpresaCreateOrConnectWithoutUsuarioInputObjectSchema as UsuarioEmpresaCreateOrConnectWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaCreateOrConnectWithoutUsuarioInput.schema';
import { UsuarioEmpresaCreateManyUsuarioInputEnvelopeObjectSchema as UsuarioEmpresaCreateManyUsuarioInputEnvelopeObjectSchema } from './UsuarioEmpresaCreateManyUsuarioInputEnvelope.schema';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './UsuarioEmpresaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema).array(), z.lazy(() => UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UsuarioEmpresaCreateOrConnectWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaCreateOrConnectWithoutUsuarioInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UsuarioEmpresaCreateManyUsuarioInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema), z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UsuarioEmpresaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUncheckedCreateNestedManyWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUncheckedCreateNestedManyWithoutUsuarioInput>;
export const UsuarioEmpresaUncheckedCreateNestedManyWithoutUsuarioInputObjectZodSchema = makeSchema();
