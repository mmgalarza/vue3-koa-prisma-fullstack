import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetCreateWithoutAlmacenInputObjectSchema as RegistroDetCreateWithoutAlmacenInputObjectSchema } from './RegistroDetCreateWithoutAlmacenInput.schema';
import { RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema as RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema } from './RegistroDetUncheckedCreateWithoutAlmacenInput.schema';
import { RegistroDetCreateOrConnectWithoutAlmacenInputObjectSchema as RegistroDetCreateOrConnectWithoutAlmacenInputObjectSchema } from './RegistroDetCreateOrConnectWithoutAlmacenInput.schema';
import { RegistroDetUpsertWithWhereUniqueWithoutAlmacenInputObjectSchema as RegistroDetUpsertWithWhereUniqueWithoutAlmacenInputObjectSchema } from './RegistroDetUpsertWithWhereUniqueWithoutAlmacenInput.schema';
import { RegistroDetCreateManyAlmacenInputEnvelopeObjectSchema as RegistroDetCreateManyAlmacenInputEnvelopeObjectSchema } from './RegistroDetCreateManyAlmacenInputEnvelope.schema';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema';
import { RegistroDetUpdateWithWhereUniqueWithoutAlmacenInputObjectSchema as RegistroDetUpdateWithWhereUniqueWithoutAlmacenInputObjectSchema } from './RegistroDetUpdateWithWhereUniqueWithoutAlmacenInput.schema';
import { RegistroDetUpdateManyWithWhereWithoutAlmacenInputObjectSchema as RegistroDetUpdateManyWithWhereWithoutAlmacenInputObjectSchema } from './RegistroDetUpdateManyWithWhereWithoutAlmacenInput.schema';
import { RegistroDetScalarWhereInputObjectSchema as RegistroDetScalarWhereInputObjectSchema } from './RegistroDetScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroDetCreateWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetCreateWithoutAlmacenInputObjectSchema).array(), z.lazy(() => RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistroDetCreateOrConnectWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetCreateOrConnectWithoutAlmacenInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RegistroDetUpsertWithWhereUniqueWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetUpsertWithWhereUniqueWithoutAlmacenInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistroDetCreateManyAlmacenInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RegistroDetUpdateWithWhereUniqueWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetUpdateWithWhereUniqueWithoutAlmacenInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RegistroDetUpdateManyWithWhereWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetUpdateManyWithWhereWithoutAlmacenInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RegistroDetScalarWhereInputObjectSchema), z.lazy(() => RegistroDetScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RegistroDetUpdateManyWithoutAlmacenNestedInputObjectSchema: z.ZodType<Prisma.RegistroDetUpdateManyWithoutAlmacenNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpdateManyWithoutAlmacenNestedInput>;
export const RegistroDetUpdateManyWithoutAlmacenNestedInputObjectZodSchema = makeSchema();
