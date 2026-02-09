import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema';
import { RegistroDetUpdateWithoutAlmacenInputObjectSchema as RegistroDetUpdateWithoutAlmacenInputObjectSchema } from './RegistroDetUpdateWithoutAlmacenInput.schema';
import { RegistroDetUncheckedUpdateWithoutAlmacenInputObjectSchema as RegistroDetUncheckedUpdateWithoutAlmacenInputObjectSchema } from './RegistroDetUncheckedUpdateWithoutAlmacenInput.schema';
import { RegistroDetCreateWithoutAlmacenInputObjectSchema as RegistroDetCreateWithoutAlmacenInputObjectSchema } from './RegistroDetCreateWithoutAlmacenInput.schema';
import { RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema as RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema } from './RegistroDetUncheckedCreateWithoutAlmacenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RegistroDetUpdateWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetUncheckedUpdateWithoutAlmacenInputObjectSchema)]),
  create: z.union([z.lazy(() => RegistroDetCreateWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema)])
}).strict();
export const RegistroDetUpsertWithWhereUniqueWithoutAlmacenInputObjectSchema: z.ZodType<Prisma.RegistroDetUpsertWithWhereUniqueWithoutAlmacenInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpsertWithWhereUniqueWithoutAlmacenInput>;
export const RegistroDetUpsertWithWhereUniqueWithoutAlmacenInputObjectZodSchema = makeSchema();
