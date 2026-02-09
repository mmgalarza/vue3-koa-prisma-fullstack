import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema';
import { RegistroDetUpdateWithoutRegistroInputObjectSchema as RegistroDetUpdateWithoutRegistroInputObjectSchema } from './RegistroDetUpdateWithoutRegistroInput.schema';
import { RegistroDetUncheckedUpdateWithoutRegistroInputObjectSchema as RegistroDetUncheckedUpdateWithoutRegistroInputObjectSchema } from './RegistroDetUncheckedUpdateWithoutRegistroInput.schema';
import { RegistroDetCreateWithoutRegistroInputObjectSchema as RegistroDetCreateWithoutRegistroInputObjectSchema } from './RegistroDetCreateWithoutRegistroInput.schema';
import { RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema as RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema } from './RegistroDetUncheckedCreateWithoutRegistroInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RegistroDetUpdateWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetUncheckedUpdateWithoutRegistroInputObjectSchema)]),
  create: z.union([z.lazy(() => RegistroDetCreateWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetUncheckedCreateWithoutRegistroInputObjectSchema)])
}).strict();
export const RegistroDetUpsertWithWhereUniqueWithoutRegistroInputObjectSchema: z.ZodType<Prisma.RegistroDetUpsertWithWhereUniqueWithoutRegistroInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpsertWithWhereUniqueWithoutRegistroInput>;
export const RegistroDetUpsertWithWhereUniqueWithoutRegistroInputObjectZodSchema = makeSchema();
