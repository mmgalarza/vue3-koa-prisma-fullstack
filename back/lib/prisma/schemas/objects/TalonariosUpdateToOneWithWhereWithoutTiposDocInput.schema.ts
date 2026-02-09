import * as z from 'zod';
import type { Prisma } from '../../client';
import { TalonariosWhereInputObjectSchema as TalonariosWhereInputObjectSchema } from './TalonariosWhereInput.schema';
import { TalonariosUpdateWithoutTiposDocInputObjectSchema as TalonariosUpdateWithoutTiposDocInputObjectSchema } from './TalonariosUpdateWithoutTiposDocInput.schema';
import { TalonariosUncheckedUpdateWithoutTiposDocInputObjectSchema as TalonariosUncheckedUpdateWithoutTiposDocInputObjectSchema } from './TalonariosUncheckedUpdateWithoutTiposDocInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TalonariosWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TalonariosUpdateWithoutTiposDocInputObjectSchema), z.lazy(() => TalonariosUncheckedUpdateWithoutTiposDocInputObjectSchema)])
}).strict();
export const TalonariosUpdateToOneWithWhereWithoutTiposDocInputObjectSchema: z.ZodType<Prisma.TalonariosUpdateToOneWithWhereWithoutTiposDocInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosUpdateToOneWithWhereWithoutTiposDocInput>;
export const TalonariosUpdateToOneWithWhereWithoutTiposDocInputObjectZodSchema = makeSchema();
