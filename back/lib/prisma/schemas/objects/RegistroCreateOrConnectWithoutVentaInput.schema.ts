import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroCreateWithoutVentaInputObjectSchema as RegistroCreateWithoutVentaInputObjectSchema } from './RegistroCreateWithoutVentaInput.schema';
import { RegistroUncheckedCreateWithoutVentaInputObjectSchema as RegistroUncheckedCreateWithoutVentaInputObjectSchema } from './RegistroUncheckedCreateWithoutVentaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RegistroCreateWithoutVentaInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutVentaInputObjectSchema)])
}).strict();
export const RegistroCreateOrConnectWithoutVentaInputObjectSchema: z.ZodType<Prisma.RegistroCreateOrConnectWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateOrConnectWithoutVentaInput>;
export const RegistroCreateOrConnectWithoutVentaInputObjectZodSchema = makeSchema();
