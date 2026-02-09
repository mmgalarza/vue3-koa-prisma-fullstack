import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema as UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaCreateWithoutEmpresaInput.schema';
import { UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema as UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUncheckedCreateWithoutEmpresaInput.schema';
import { UsuarioEmpresaCreateOrConnectWithoutEmpresaInputObjectSchema as UsuarioEmpresaCreateOrConnectWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaCreateOrConnectWithoutEmpresaInput.schema';
import { UsuarioEmpresaCreateManyEmpresaInputEnvelopeObjectSchema as UsuarioEmpresaCreateManyEmpresaInputEnvelopeObjectSchema } from './UsuarioEmpresaCreateManyEmpresaInputEnvelope.schema';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './UsuarioEmpresaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UsuarioEmpresaCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UsuarioEmpresaCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema), z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UsuarioEmpresaCreateNestedManyWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaCreateNestedManyWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaCreateNestedManyWithoutEmpresaInput>;
export const UsuarioEmpresaCreateNestedManyWithoutEmpresaInputObjectZodSchema = makeSchema();
