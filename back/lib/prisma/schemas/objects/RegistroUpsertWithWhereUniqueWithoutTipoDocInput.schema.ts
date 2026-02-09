import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroUpdateWithoutTipoDocInputObjectSchema as RegistroUpdateWithoutTipoDocInputObjectSchema } from './RegistroUpdateWithoutTipoDocInput.schema';
import { RegistroUncheckedUpdateWithoutTipoDocInputObjectSchema as RegistroUncheckedUpdateWithoutTipoDocInputObjectSchema } from './RegistroUncheckedUpdateWithoutTipoDocInput.schema';
import { RegistroCreateWithoutTipoDocInputObjectSchema as RegistroCreateWithoutTipoDocInputObjectSchema } from './RegistroCreateWithoutTipoDocInput.schema';
import { RegistroUncheckedCreateWithoutTipoDocInputObjectSchema as RegistroUncheckedCreateWithoutTipoDocInputObjectSchema } from './RegistroUncheckedCreateWithoutTipoDocInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RegistroUpdateWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroUncheckedUpdateWithoutTipoDocInputObjectSchema)]),
  create: z.union([z.lazy(() => RegistroCreateWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutTipoDocInputObjectSchema)])
}).strict();
export const RegistroUpsertWithWhereUniqueWithoutTipoDocInputObjectSchema: z.ZodType<Prisma.RegistroUpsertWithWhereUniqueWithoutTipoDocInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpsertWithWhereUniqueWithoutTipoDocInput>;
export const RegistroUpsertWithWhereUniqueWithoutTipoDocInputObjectZodSchema = makeSchema();
