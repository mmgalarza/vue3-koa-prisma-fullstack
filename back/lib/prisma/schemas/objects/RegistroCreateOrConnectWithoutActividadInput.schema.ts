import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroCreateWithoutActividadInputObjectSchema as RegistroCreateWithoutActividadInputObjectSchema } from './RegistroCreateWithoutActividadInput.schema';
import { RegistroUncheckedCreateWithoutActividadInputObjectSchema as RegistroUncheckedCreateWithoutActividadInputObjectSchema } from './RegistroUncheckedCreateWithoutActividadInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RegistroCreateWithoutActividadInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutActividadInputObjectSchema)])
}).strict();
export const RegistroCreateOrConnectWithoutActividadInputObjectSchema: z.ZodType<Prisma.RegistroCreateOrConnectWithoutActividadInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateOrConnectWithoutActividadInput>;
export const RegistroCreateOrConnectWithoutActividadInputObjectZodSchema = makeSchema();
