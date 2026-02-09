import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema';
import { RegistroDetCreateWithoutRegistroInputObjectSchema as RegistroDetCreateWithoutRegistroInputObjectSchema } from './RegistroDetCreateWithoutRegistroInput.schema';
import { RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema as RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema } from './RegistroDetUncheckedCreateWithoutRegistroInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RegistroDetCreateWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema)])
}).strict();
export const RegistroDetCreateOrConnectWithoutRegistroInputObjectSchema: z.ZodType<Prisma.RegistroDetCreateOrConnectWithoutRegistroInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCreateOrConnectWithoutRegistroInput>;
export const RegistroDetCreateOrConnectWithoutRegistroInputObjectZodSchema = makeSchema();
