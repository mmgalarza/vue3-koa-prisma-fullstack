import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCreateWithoutVentaInputObjectSchema as RegistroCreateWithoutVentaInputObjectSchema } from './RegistroCreateWithoutVentaInput.schema';
import { RegistroUncheckedCreateWithoutVentaInputObjectSchema as RegistroUncheckedCreateWithoutVentaInputObjectSchema } from './RegistroUncheckedCreateWithoutVentaInput.schema';
import { RegistroCreateOrConnectWithoutVentaInputObjectSchema as RegistroCreateOrConnectWithoutVentaInputObjectSchema } from './RegistroCreateOrConnectWithoutVentaInput.schema';
import { RegistroUpsertWithWhereUniqueWithoutVentaInputObjectSchema as RegistroUpsertWithWhereUniqueWithoutVentaInputObjectSchema } from './RegistroUpsertWithWhereUniqueWithoutVentaInput.schema';
import { RegistroCreateManyVentaInputEnvelopeObjectSchema as RegistroCreateManyVentaInputEnvelopeObjectSchema } from './RegistroCreateManyVentaInputEnvelope.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroUpdateWithWhereUniqueWithoutVentaInputObjectSchema as RegistroUpdateWithWhereUniqueWithoutVentaInputObjectSchema } from './RegistroUpdateWithWhereUniqueWithoutVentaInput.schema';
import { RegistroUpdateManyWithWhereWithoutVentaInputObjectSchema as RegistroUpdateManyWithWhereWithoutVentaInputObjectSchema } from './RegistroUpdateManyWithWhereWithoutVentaInput.schema';
import { RegistroScalarWhereInputObjectSchema as RegistroScalarWhereInputObjectSchema } from './RegistroScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroCreateWithoutVentaInputObjectSchema), z.lazy(() => RegistroCreateWithoutVentaInputObjectSchema).array(), z.lazy(() => RegistroUncheckedCreateWithoutVentaInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutVentaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistroCreateOrConnectWithoutVentaInputObjectSchema), z.lazy(() => RegistroCreateOrConnectWithoutVentaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RegistroUpsertWithWhereUniqueWithoutVentaInputObjectSchema), z.lazy(() => RegistroUpsertWithWhereUniqueWithoutVentaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistroCreateManyVentaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RegistroUpdateWithWhereUniqueWithoutVentaInputObjectSchema), z.lazy(() => RegistroUpdateWithWhereUniqueWithoutVentaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RegistroUpdateManyWithWhereWithoutVentaInputObjectSchema), z.lazy(() => RegistroUpdateManyWithWhereWithoutVentaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RegistroScalarWhereInputObjectSchema), z.lazy(() => RegistroScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RegistroUncheckedUpdateManyWithoutVentaNestedInputObjectSchema: z.ZodType<Prisma.RegistroUncheckedUpdateManyWithoutVentaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUncheckedUpdateManyWithoutVentaNestedInput>;
export const RegistroUncheckedUpdateManyWithoutVentaNestedInputObjectZodSchema = makeSchema();
