import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema';
import { RegistroDetCreateWithoutAlmacenInputObjectSchema as RegistroDetCreateWithoutAlmacenInputObjectSchema } from './RegistroDetCreateWithoutAlmacenInput.schema';
import { RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema as RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema } from './RegistroDetUncheckedCreateWithoutAlmacenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RegistroDetCreateWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema)])
}).strict();
export const RegistroDetCreateOrConnectWithoutAlmacenInputObjectSchema: z.ZodType<Prisma.RegistroDetCreateOrConnectWithoutAlmacenInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCreateOrConnectWithoutAlmacenInput>;
export const RegistroDetCreateOrConnectWithoutAlmacenInputObjectZodSchema = makeSchema();
