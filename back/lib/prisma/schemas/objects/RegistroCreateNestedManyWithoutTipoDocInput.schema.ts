import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCreateWithoutTipoDocInputObjectSchema as RegistroCreateWithoutTipoDocInputObjectSchema } from './RegistroCreateWithoutTipoDocInput.schema';
import { RegistroUncheckedCreateWithoutTipoDocInputObjectSchema as RegistroUncheckedCreateWithoutTipoDocInputObjectSchema } from './RegistroUncheckedCreateWithoutTipoDocInput.schema';
import { RegistroCreateOrConnectWithoutTipoDocInputObjectSchema as RegistroCreateOrConnectWithoutTipoDocInputObjectSchema } from './RegistroCreateOrConnectWithoutTipoDocInput.schema';
import { RegistroCreateManyTipoDocInputEnvelopeObjectSchema as RegistroCreateManyTipoDocInputEnvelopeObjectSchema } from './RegistroCreateManyTipoDocInputEnvelope.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroCreateWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroCreateWithoutTipoDocInputObjectSchema).array(), z.lazy(() => RegistroUncheckedCreateWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutTipoDocInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistroCreateOrConnectWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroCreateOrConnectWithoutTipoDocInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistroCreateManyTipoDocInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RegistroCreateNestedManyWithoutTipoDocInputObjectSchema: z.ZodType<Prisma.RegistroCreateNestedManyWithoutTipoDocInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateNestedManyWithoutTipoDocInput>;
export const RegistroCreateNestedManyWithoutTipoDocInputObjectZodSchema = makeSchema();
