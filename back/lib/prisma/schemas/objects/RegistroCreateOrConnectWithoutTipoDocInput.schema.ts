import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroCreateWithoutTipoDocInputObjectSchema as RegistroCreateWithoutTipoDocInputObjectSchema } from './RegistroCreateWithoutTipoDocInput.schema';
import { RegistroUncheckedCreateWithoutTipoDocInputObjectSchema as RegistroUncheckedCreateWithoutTipoDocInputObjectSchema } from './RegistroUncheckedCreateWithoutTipoDocInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RegistroCreateWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutTipoDocInputObjectSchema)])
}).strict();
export const RegistroCreateOrConnectWithoutTipoDocInputObjectSchema: z.ZodType<Prisma.RegistroCreateOrConnectWithoutTipoDocInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateOrConnectWithoutTipoDocInput>;
export const RegistroCreateOrConnectWithoutTipoDocInputObjectZodSchema = makeSchema();
