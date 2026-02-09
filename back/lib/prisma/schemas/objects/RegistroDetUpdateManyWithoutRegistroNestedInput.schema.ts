import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetCreateWithoutRegistroInputObjectSchema as RegistroDetCreateWithoutRegistroInputObjectSchema } from './RegistroDetCreateWithoutRegistroInput.schema';
import { RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema as RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema } from './RegistroDetUncheckedCreateWithoutRegistroInput.schema';
import { RegistroDetCreateOrConnectWithoutRegistroInputObjectSchema as RegistroDetCreateOrConnectWithoutRegistroInputObjectSchema } from './RegistroDetCreateOrConnectWithoutRegistroInput.schema';
import { RegistroDetUpsertWithWhereUniqueWithoutRegistroInputObjectSchema as RegistroDetUpsertWithWhereUniqueWithoutRegistroInputObjectSchema } from './RegistroDetUpsertWithWhereUniqueWithoutRegistroInput.schema';
import { RegistroDetCreateManyRegistroInputEnvelopeObjectSchema as RegistroDetCreateManyRegistroInputEnvelopeObjectSchema } from './RegistroDetCreateManyRegistroInputEnvelope.schema';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema';
import { RegistroDetUpdateWithWhereUniqueWithoutRegistroInputObjectSchema as RegistroDetUpdateWithWhereUniqueWithoutRegistroInputObjectSchema } from './RegistroDetUpdateWithWhereUniqueWithoutRegistroInput.schema';
import { RegistroDetUpdateManyWithWhereWithoutRegistroInputObjectSchema as RegistroDetUpdateManyWithWhereWithoutRegistroInputObjectSchema } from './RegistroDetUpdateManyWithWhereWithoutRegistroInput.schema';
import { RegistroDetScalarWhereInputObjectSchema as RegistroDetScalarWhereInputObjectSchema } from './RegistroDetScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroDetCreateWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetCreateWithoutRegistroInputObjectSchema).array(), z.lazy(() => RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistroDetCreateOrConnectWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetCreateOrConnectWithoutRegistroInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RegistroDetUpsertWithWhereUniqueWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetUpsertWithWhereUniqueWithoutRegistroInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistroDetCreateManyRegistroInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RegistroDetUpdateWithWhereUniqueWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetUpdateWithWhereUniqueWithoutRegistroInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RegistroDetUpdateManyWithWhereWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetUpdateManyWithWhereWithoutRegistroInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RegistroDetScalarWhereInputObjectSchema), z.lazy(() => RegistroDetScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema: z.ZodType<Prisma.RegistroDetUpdateManyWithoutRegistroNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpdateManyWithoutRegistroNestedInput>;
export const RegistroDetUpdateManyWithoutRegistroNestedInputObjectZodSchema = makeSchema();
