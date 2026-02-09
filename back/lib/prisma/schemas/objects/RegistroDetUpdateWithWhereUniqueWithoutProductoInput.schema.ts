import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema';
import { RegistroDetUpdateWithoutProductoInputObjectSchema as RegistroDetUpdateWithoutProductoInputObjectSchema } from './RegistroDetUpdateWithoutProductoInput.schema';
import { RegistroDetUncheckedUpdateWithoutProductoInputObjectSchema as RegistroDetUncheckedUpdateWithoutProductoInputObjectSchema } from './RegistroDetUncheckedUpdateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RegistroDetUpdateWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetUncheckedUpdateWithoutProductoInputObjectSchema)])
}).strict();
export const RegistroDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema: z.ZodType<Prisma.RegistroDetUpdateWithWhereUniqueWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpdateWithWhereUniqueWithoutProductoInput>;
export const RegistroDetUpdateWithWhereUniqueWithoutProductoInputObjectZodSchema = makeSchema();
