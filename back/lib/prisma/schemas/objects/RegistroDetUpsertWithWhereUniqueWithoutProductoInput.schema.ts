import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema';
import { RegistroDetUpdateWithoutProductoInputObjectSchema as RegistroDetUpdateWithoutProductoInputObjectSchema } from './RegistroDetUpdateWithoutProductoInput.schema';
import { RegistroDetUncheckedUpdateWithoutProductoInputObjectSchema as RegistroDetUncheckedUpdateWithoutProductoInputObjectSchema } from './RegistroDetUncheckedUpdateWithoutProductoInput.schema';
import { RegistroDetCreateWithoutProductoInputObjectSchema as RegistroDetCreateWithoutProductoInputObjectSchema } from './RegistroDetCreateWithoutProductoInput.schema';
import { RegistroDetUncheckedCreateWithoutProductoInputObjectSchema as RegistroDetUncheckedCreateWithoutProductoInputObjectSchema } from './RegistroDetUncheckedCreateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RegistroDetUpdateWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetUncheckedUpdateWithoutProductoInputObjectSchema)]),
  create: z.union([z.lazy(() => RegistroDetCreateWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetUncheckedCreateWithoutProductoInputObjectSchema)])
}).strict();
export const RegistroDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema: z.ZodType<Prisma.RegistroDetUpsertWithWhereUniqueWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpsertWithWhereUniqueWithoutProductoInput>;
export const RegistroDetUpsertWithWhereUniqueWithoutProductoInputObjectZodSchema = makeSchema();
