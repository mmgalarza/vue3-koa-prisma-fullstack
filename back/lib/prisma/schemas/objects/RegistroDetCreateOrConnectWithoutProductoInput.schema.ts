import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema';
import { RegistroDetCreateWithoutProductoInputObjectSchema as RegistroDetCreateWithoutProductoInputObjectSchema } from './RegistroDetCreateWithoutProductoInput.schema';
import { RegistroDetUncheckedCreateWithoutProductoInputObjectSchema as RegistroDetUncheckedCreateWithoutProductoInputObjectSchema } from './RegistroDetUncheckedCreateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RegistroDetCreateWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetUncheckedCreateWithoutProductoInputObjectSchema)])
}).strict();
export const RegistroDetCreateOrConnectWithoutProductoInputObjectSchema: z.ZodType<Prisma.RegistroDetCreateOrConnectWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCreateOrConnectWithoutProductoInput>;
export const RegistroDetCreateOrConnectWithoutProductoInputObjectZodSchema = makeSchema();
