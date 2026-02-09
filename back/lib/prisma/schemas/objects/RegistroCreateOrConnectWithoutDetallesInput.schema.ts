import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroCreateWithoutDetallesInputObjectSchema as RegistroCreateWithoutDetallesInputObjectSchema } from './RegistroCreateWithoutDetallesInput.schema';
import { RegistroUncheckedCreateWithoutDetallesInputObjectSchema as RegistroUncheckedCreateWithoutDetallesInputObjectSchema } from './RegistroUncheckedCreateWithoutDetallesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RegistroCreateWithoutDetallesInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutDetallesInputObjectSchema)])
}).strict();
export const RegistroCreateOrConnectWithoutDetallesInputObjectSchema: z.ZodType<Prisma.RegistroCreateOrConnectWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateOrConnectWithoutDetallesInput>;
export const RegistroCreateOrConnectWithoutDetallesInputObjectZodSchema = makeSchema();
