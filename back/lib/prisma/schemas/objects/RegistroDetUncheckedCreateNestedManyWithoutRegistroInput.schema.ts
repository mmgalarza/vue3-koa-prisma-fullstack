import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetCreateWithoutRegistroInputObjectSchema as RegistroDetCreateWithoutRegistroInputObjectSchema } from './RegistroDetCreateWithoutRegistroInput.schema';
import { RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema as RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema } from './RegistroDetUncheckedCreateWithoutRegistroInput.schema';
import { RegistroDetCreateOrConnectWithoutRegistroInputObjectSchema as RegistroDetCreateOrConnectWithoutRegistroInputObjectSchema } from './RegistroDetCreateOrConnectWithoutRegistroInput.schema';
import { RegistroDetCreateManyRegistroInputEnvelopeObjectSchema as RegistroDetCreateManyRegistroInputEnvelopeObjectSchema } from './RegistroDetCreateManyRegistroInputEnvelope.schema';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroDetCreateWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetCreateWithoutRegistroInputObjectSchema).array(), z.lazy(() => RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistroDetCreateOrConnectWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetCreateOrConnectWithoutRegistroInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistroDetCreateManyRegistroInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RegistroDetUncheckedCreateNestedManyWithoutRegistroInputObjectSchema: z.ZodType<Prisma.RegistroDetUncheckedCreateNestedManyWithoutRegistroInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUncheckedCreateNestedManyWithoutRegistroInput>;
export const RegistroDetUncheckedCreateNestedManyWithoutRegistroInputObjectZodSchema = makeSchema();
