import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCreateWithoutActividadInputObjectSchema as RegistroCreateWithoutActividadInputObjectSchema } from './RegistroCreateWithoutActividadInput.schema';
import { RegistroUncheckedCreateWithoutActividadInputObjectSchema as RegistroUncheckedCreateWithoutActividadInputObjectSchema } from './RegistroUncheckedCreateWithoutActividadInput.schema';
import { RegistroCreateOrConnectWithoutActividadInputObjectSchema as RegistroCreateOrConnectWithoutActividadInputObjectSchema } from './RegistroCreateOrConnectWithoutActividadInput.schema';
import { RegistroUpsertWithWhereUniqueWithoutActividadInputObjectSchema as RegistroUpsertWithWhereUniqueWithoutActividadInputObjectSchema } from './RegistroUpsertWithWhereUniqueWithoutActividadInput.schema';
import { RegistroCreateManyActividadInputEnvelopeObjectSchema as RegistroCreateManyActividadInputEnvelopeObjectSchema } from './RegistroCreateManyActividadInputEnvelope.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroUpdateWithWhereUniqueWithoutActividadInputObjectSchema as RegistroUpdateWithWhereUniqueWithoutActividadInputObjectSchema } from './RegistroUpdateWithWhereUniqueWithoutActividadInput.schema';
import { RegistroUpdateManyWithWhereWithoutActividadInputObjectSchema as RegistroUpdateManyWithWhereWithoutActividadInputObjectSchema } from './RegistroUpdateManyWithWhereWithoutActividadInput.schema';
import { RegistroScalarWhereInputObjectSchema as RegistroScalarWhereInputObjectSchema } from './RegistroScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroCreateWithoutActividadInputObjectSchema), z.lazy(() => RegistroCreateWithoutActividadInputObjectSchema).array(), z.lazy(() => RegistroUncheckedCreateWithoutActividadInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutActividadInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistroCreateOrConnectWithoutActividadInputObjectSchema), z.lazy(() => RegistroCreateOrConnectWithoutActividadInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RegistroUpsertWithWhereUniqueWithoutActividadInputObjectSchema), z.lazy(() => RegistroUpsertWithWhereUniqueWithoutActividadInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistroCreateManyActividadInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RegistroUpdateWithWhereUniqueWithoutActividadInputObjectSchema), z.lazy(() => RegistroUpdateWithWhereUniqueWithoutActividadInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RegistroUpdateManyWithWhereWithoutActividadInputObjectSchema), z.lazy(() => RegistroUpdateManyWithWhereWithoutActividadInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RegistroScalarWhereInputObjectSchema), z.lazy(() => RegistroScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RegistroUpdateManyWithoutActividadNestedInputObjectSchema: z.ZodType<Prisma.RegistroUpdateManyWithoutActividadNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateManyWithoutActividadNestedInput>;
export const RegistroUpdateManyWithoutActividadNestedInputObjectZodSchema = makeSchema();
