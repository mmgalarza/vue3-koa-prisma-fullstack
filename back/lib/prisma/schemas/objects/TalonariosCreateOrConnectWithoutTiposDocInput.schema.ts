import * as z from 'zod';
import type { Prisma } from '../../client';
import { TalonariosWhereUniqueInputObjectSchema as TalonariosWhereUniqueInputObjectSchema } from './TalonariosWhereUniqueInput.schema';
import { TalonariosCreateWithoutTiposDocInputObjectSchema as TalonariosCreateWithoutTiposDocInputObjectSchema } from './TalonariosCreateWithoutTiposDocInput.schema';
import { TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema as TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema } from './TalonariosUncheckedCreateWithoutTiposDocInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TalonariosWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TalonariosCreateWithoutTiposDocInputObjectSchema), z.lazy(() => TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema)])
}).strict();
export const TalonariosCreateOrConnectWithoutTiposDocInputObjectSchema: z.ZodType<Prisma.TalonariosCreateOrConnectWithoutTiposDocInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosCreateOrConnectWithoutTiposDocInput>;
export const TalonariosCreateOrConnectWithoutTiposDocInputObjectZodSchema = makeSchema();
