import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema as UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaCreateWithoutUsuarioInput.schema';
import { UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema as UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUncheckedCreateWithoutUsuarioInput.schema';
import { UsuarioEmpresaCreateOrConnectWithoutUsuarioInputObjectSchema as UsuarioEmpresaCreateOrConnectWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaCreateOrConnectWithoutUsuarioInput.schema';
import { UsuarioEmpresaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema as UsuarioEmpresaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUpsertWithWhereUniqueWithoutUsuarioInput.schema';
import { UsuarioEmpresaCreateManyUsuarioInputEnvelopeObjectSchema as UsuarioEmpresaCreateManyUsuarioInputEnvelopeObjectSchema } from './UsuarioEmpresaCreateManyUsuarioInputEnvelope.schema';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './UsuarioEmpresaWhereUniqueInput.schema';
import { UsuarioEmpresaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema as UsuarioEmpresaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUpdateWithWhereUniqueWithoutUsuarioInput.schema';
import { UsuarioEmpresaUpdateManyWithWhereWithoutUsuarioInputObjectSchema as UsuarioEmpresaUpdateManyWithWhereWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUpdateManyWithWhereWithoutUsuarioInput.schema';
import { UsuarioEmpresaScalarWhereInputObjectSchema as UsuarioEmpresaScalarWhereInputObjectSchema } from './UsuarioEmpresaScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema).array(), z.lazy(() => UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UsuarioEmpresaCreateOrConnectWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaCreateOrConnectWithoutUsuarioInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UsuarioEmpresaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UsuarioEmpresaCreateManyUsuarioInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema), z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema), z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema), z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema), z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UsuarioEmpresaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UsuarioEmpresaUpdateManyWithWhereWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaUpdateManyWithWhereWithoutUsuarioInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UsuarioEmpresaScalarWhereInputObjectSchema), z.lazy(() => UsuarioEmpresaScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UsuarioEmpresaUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUncheckedUpdateManyWithoutUsuarioNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUncheckedUpdateManyWithoutUsuarioNestedInput>;
export const UsuarioEmpresaUncheckedUpdateManyWithoutUsuarioNestedInputObjectZodSchema = makeSchema();
