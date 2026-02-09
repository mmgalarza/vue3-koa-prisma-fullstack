import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCreateWithoutTipoDocInputObjectSchema as RegistroCreateWithoutTipoDocInputObjectSchema } from './RegistroCreateWithoutTipoDocInput.schema';
import { RegistroUncheckedCreateWithoutTipoDocInputObjectSchema as RegistroUncheckedCreateWithoutTipoDocInputObjectSchema } from './RegistroUncheckedCreateWithoutTipoDocInput.schema';
import { RegistroCreateOrConnectWithoutTipoDocInputObjectSchema as RegistroCreateOrConnectWithoutTipoDocInputObjectSchema } from './RegistroCreateOrConnectWithoutTipoDocInput.schema';
import { RegistroUpsertWithWhereUniqueWithoutTipoDocInputObjectSchema as RegistroUpsertWithWhereUniqueWithoutTipoDocInputObjectSchema } from './RegistroUpsertWithWhereUniqueWithoutTipoDocInput.schema';
import { RegistroCreateManyTipoDocInputEnvelopeObjectSchema as RegistroCreateManyTipoDocInputEnvelopeObjectSchema } from './RegistroCreateManyTipoDocInputEnvelope.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroUpdateWithWhereUniqueWithoutTipoDocInputObjectSchema as RegistroUpdateWithWhereUniqueWithoutTipoDocInputObjectSchema } from './RegistroUpdateWithWhereUniqueWithoutTipoDocInput.schema';
import { RegistroUpdateManyWithWhereWithoutTipoDocInputObjectSchema as RegistroUpdateManyWithWhereWithoutTipoDocInputObjectSchema } from './RegistroUpdateManyWithWhereWithoutTipoDocInput.schema';
import { RegistroScalarWhereInputObjectSchema as RegistroScalarWhereInputObjectSchema } from './RegistroScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroCreateWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroCreateWithoutTipoDocInputObjectSchema).array(), z.lazy(() => RegistroUncheckedCreateWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutTipoDocInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistroCreateOrConnectWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroCreateOrConnectWithoutTipoDocInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RegistroUpsertWithWhereUniqueWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroUpsertWithWhereUniqueWithoutTipoDocInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistroCreateManyTipoDocInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RegistroUpdateWithWhereUniqueWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroUpdateWithWhereUniqueWithoutTipoDocInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RegistroUpdateManyWithWhereWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroUpdateManyWithWhereWithoutTipoDocInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RegistroScalarWhereInputObjectSchema), z.lazy(() => RegistroScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RegistroUncheckedUpdateManyWithoutTipoDocNestedInputObjectSchema: z.ZodType<Prisma.RegistroUncheckedUpdateManyWithoutTipoDocNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUncheckedUpdateManyWithoutTipoDocNestedInput>;
export const RegistroUncheckedUpdateManyWithoutTipoDocNestedInputObjectZodSchema = makeSchema();
