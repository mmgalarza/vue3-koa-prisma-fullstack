import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCreateWithoutActividadInputObjectSchema as RegistroCreateWithoutActividadInputObjectSchema } from './RegistroCreateWithoutActividadInput.schema';
import { RegistroUncheckedCreateWithoutActividadInputObjectSchema as RegistroUncheckedCreateWithoutActividadInputObjectSchema } from './RegistroUncheckedCreateWithoutActividadInput.schema';
import { RegistroCreateOrConnectWithoutActividadInputObjectSchema as RegistroCreateOrConnectWithoutActividadInputObjectSchema } from './RegistroCreateOrConnectWithoutActividadInput.schema';
import { RegistroCreateManyActividadInputEnvelopeObjectSchema as RegistroCreateManyActividadInputEnvelopeObjectSchema } from './RegistroCreateManyActividadInputEnvelope.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroCreateWithoutActividadInputObjectSchema), z.lazy(() => RegistroCreateWithoutActividadInputObjectSchema).array(), z.lazy(() => RegistroUncheckedCreateWithoutActividadInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutActividadInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistroCreateOrConnectWithoutActividadInputObjectSchema), z.lazy(() => RegistroCreateOrConnectWithoutActividadInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistroCreateManyActividadInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RegistroUncheckedCreateNestedManyWithoutActividadInputObjectSchema: z.ZodType<Prisma.RegistroUncheckedCreateNestedManyWithoutActividadInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUncheckedCreateNestedManyWithoutActividadInput>;
export const RegistroUncheckedCreateNestedManyWithoutActividadInputObjectZodSchema = makeSchema();
