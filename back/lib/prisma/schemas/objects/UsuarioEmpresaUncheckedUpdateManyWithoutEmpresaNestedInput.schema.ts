import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema as UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaCreateWithoutEmpresaInput.schema';
import { UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema as UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUncheckedCreateWithoutEmpresaInput.schema';
import { UsuarioEmpresaCreateOrConnectWithoutEmpresaInputObjectSchema as UsuarioEmpresaCreateOrConnectWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaCreateOrConnectWithoutEmpresaInput.schema';
import { UsuarioEmpresaUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema as UsuarioEmpresaUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUpsertWithWhereUniqueWithoutEmpresaInput.schema';
import { UsuarioEmpresaCreateManyEmpresaInputEnvelopeObjectSchema as UsuarioEmpresaCreateManyEmpresaInputEnvelopeObjectSchema } from './UsuarioEmpresaCreateManyEmpresaInputEnvelope.schema';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './UsuarioEmpresaWhereUniqueInput.schema';
import { UsuarioEmpresaUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema as UsuarioEmpresaUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUpdateWithWhereUniqueWithoutEmpresaInput.schema';
import { UsuarioEmpresaUpdateManyWithWhereWithoutEmpresaInputObjectSchema as UsuarioEmpresaUpdateManyWithWhereWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUpdateManyWithWhereWithoutEmpresaInput.schema';
import { UsuarioEmpresaScalarWhereInputObjectSchema as UsuarioEmpresaScalarWhereInputObjectSchema } from './UsuarioEmpresaScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UsuarioEmpresaCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UsuarioEmpresaUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UsuarioEmpresaCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema), z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema), z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema), z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema), z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UsuarioEmpresaUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UsuarioEmpresaUpdateManyWithWhereWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaUpdateManyWithWhereWithoutEmpresaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UsuarioEmpresaScalarWhereInputObjectSchema), z.lazy(() => UsuarioEmpresaScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UsuarioEmpresaUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUncheckedUpdateManyWithoutEmpresaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUncheckedUpdateManyWithoutEmpresaNestedInput>;
export const UsuarioEmpresaUncheckedUpdateManyWithoutEmpresaNestedInputObjectZodSchema = makeSchema();
