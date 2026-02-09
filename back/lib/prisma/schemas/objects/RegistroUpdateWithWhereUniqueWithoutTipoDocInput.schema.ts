import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroUpdateWithoutTipoDocInputObjectSchema as RegistroUpdateWithoutTipoDocInputObjectSchema } from './RegistroUpdateWithoutTipoDocInput.schema';
import { RegistroUncheckedUpdateWithoutTipoDocInputObjectSchema as RegistroUncheckedUpdateWithoutTipoDocInputObjectSchema } from './RegistroUncheckedUpdateWithoutTipoDocInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RegistroUpdateWithoutTipoDocInputObjectSchema), z.lazy(() => RegistroUncheckedUpdateWithoutTipoDocInputObjectSchema)])
}).strict();
export const RegistroUpdateWithWhereUniqueWithoutTipoDocInputObjectSchema: z.ZodType<Prisma.RegistroUpdateWithWhereUniqueWithoutTipoDocInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateWithWhereUniqueWithoutTipoDocInput>;
export const RegistroUpdateWithWhereUniqueWithoutTipoDocInputObjectZodSchema = makeSchema();
