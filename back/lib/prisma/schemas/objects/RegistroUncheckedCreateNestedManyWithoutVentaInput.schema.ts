import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCreateWithoutVentaInputObjectSchema as RegistroCreateWithoutVentaInputObjectSchema } from './RegistroCreateWithoutVentaInput.schema';
import { RegistroUncheckedCreateWithoutVentaInputObjectSchema as RegistroUncheckedCreateWithoutVentaInputObjectSchema } from './RegistroUncheckedCreateWithoutVentaInput.schema';
import { RegistroCreateOrConnectWithoutVentaInputObjectSchema as RegistroCreateOrConnectWithoutVentaInputObjectSchema } from './RegistroCreateOrConnectWithoutVentaInput.schema';
import { RegistroCreateManyVentaInputEnvelopeObjectSchema as RegistroCreateManyVentaInputEnvelopeObjectSchema } from './RegistroCreateManyVentaInputEnvelope.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroCreateWithoutVentaInputObjectSchema), z.lazy(() => RegistroCreateWithoutVentaInputObjectSchema).array(), z.lazy(() => RegistroUncheckedCreateWithoutVentaInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutVentaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistroCreateOrConnectWithoutVentaInputObjectSchema), z.lazy(() => RegistroCreateOrConnectWithoutVentaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistroCreateManyVentaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RegistroWhereUniqueInputObjectSchema), z.lazy(() => RegistroWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RegistroUncheckedCreateNestedManyWithoutVentaInputObjectSchema: z.ZodType<Prisma.RegistroUncheckedCreateNestedManyWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUncheckedCreateNestedManyWithoutVentaInput>;
export const RegistroUncheckedCreateNestedManyWithoutVentaInputObjectZodSchema = makeSchema();
