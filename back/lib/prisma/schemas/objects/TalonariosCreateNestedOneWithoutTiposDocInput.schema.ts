import * as z from 'zod';
import type { Prisma } from '../../client';
import { TalonariosCreateWithoutTiposDocInputObjectSchema as TalonariosCreateWithoutTiposDocInputObjectSchema } from './TalonariosCreateWithoutTiposDocInput.schema';
import { TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema as TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema } from './TalonariosUncheckedCreateWithoutTiposDocInput.schema';
import { TalonariosCreateOrConnectWithoutTiposDocInputObjectSchema as TalonariosCreateOrConnectWithoutTiposDocInputObjectSchema } from './TalonariosCreateOrConnectWithoutTiposDocInput.schema';
import { TalonariosWhereUniqueInputObjectSchema as TalonariosWhereUniqueInputObjectSchema } from './TalonariosWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TalonariosCreateWithoutTiposDocInputObjectSchema), z.lazy(() => TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TalonariosCreateOrConnectWithoutTiposDocInputObjectSchema).optional(),
  connect: z.lazy(() => TalonariosWhereUniqueInputObjectSchema).optional()
}).strict();
export const TalonariosCreateNestedOneWithoutTiposDocInputObjectSchema: z.ZodType<Prisma.TalonariosCreateNestedOneWithoutTiposDocInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosCreateNestedOneWithoutTiposDocInput>;
export const TalonariosCreateNestedOneWithoutTiposDocInputObjectZodSchema = makeSchema();
