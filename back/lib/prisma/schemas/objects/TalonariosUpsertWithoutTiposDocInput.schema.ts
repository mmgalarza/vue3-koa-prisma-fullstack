import * as z from 'zod';
import type { Prisma } from '../../client';
import { TalonariosUpdateWithoutTiposDocInputObjectSchema as TalonariosUpdateWithoutTiposDocInputObjectSchema } from './TalonariosUpdateWithoutTiposDocInput.schema';
import { TalonariosUncheckedUpdateWithoutTiposDocInputObjectSchema as TalonariosUncheckedUpdateWithoutTiposDocInputObjectSchema } from './TalonariosUncheckedUpdateWithoutTiposDocInput.schema';
import { TalonariosCreateWithoutTiposDocInputObjectSchema as TalonariosCreateWithoutTiposDocInputObjectSchema } from './TalonariosCreateWithoutTiposDocInput.schema';
import { TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema as TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema } from './TalonariosUncheckedCreateWithoutTiposDocInput.schema';
import { TalonariosWhereInputObjectSchema as TalonariosWhereInputObjectSchema } from './TalonariosWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TalonariosUpdateWithoutTiposDocInputObjectSchema), z.lazy(() => TalonariosUncheckedUpdateWithoutTiposDocInputObjectSchema)]),
  create: z.union([z.lazy(() => TalonariosCreateWithoutTiposDocInputObjectSchema), z.lazy(() => TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema)]),
  where: z.lazy(() => TalonariosWhereInputObjectSchema).optional()
}).strict();
export const TalonariosUpsertWithoutTiposDocInputObjectSchema: z.ZodType<Prisma.TalonariosUpsertWithoutTiposDocInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosUpsertWithoutTiposDocInput>;
export const TalonariosUpsertWithoutTiposDocInputObjectZodSchema = makeSchema();
