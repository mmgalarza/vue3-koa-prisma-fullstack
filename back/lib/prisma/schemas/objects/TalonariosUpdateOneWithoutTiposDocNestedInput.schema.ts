import * as z from 'zod';
import type { Prisma } from '../../client';
import { TalonariosCreateWithoutTiposDocInputObjectSchema as TalonariosCreateWithoutTiposDocInputObjectSchema } from './TalonariosCreateWithoutTiposDocInput.schema';
import { TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema as TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema } from './TalonariosUncheckedCreateWithoutTiposDocInput.schema';
import { TalonariosCreateOrConnectWithoutTiposDocInputObjectSchema as TalonariosCreateOrConnectWithoutTiposDocInputObjectSchema } from './TalonariosCreateOrConnectWithoutTiposDocInput.schema';
import { TalonariosUpsertWithoutTiposDocInputObjectSchema as TalonariosUpsertWithoutTiposDocInputObjectSchema } from './TalonariosUpsertWithoutTiposDocInput.schema';
import { TalonariosWhereInputObjectSchema as TalonariosWhereInputObjectSchema } from './TalonariosWhereInput.schema';
import { TalonariosWhereUniqueInputObjectSchema as TalonariosWhereUniqueInputObjectSchema } from './TalonariosWhereUniqueInput.schema';
import { TalonariosUpdateToOneWithWhereWithoutTiposDocInputObjectSchema as TalonariosUpdateToOneWithWhereWithoutTiposDocInputObjectSchema } from './TalonariosUpdateToOneWithWhereWithoutTiposDocInput.schema';
import { TalonariosUpdateWithoutTiposDocInputObjectSchema as TalonariosUpdateWithoutTiposDocInputObjectSchema } from './TalonariosUpdateWithoutTiposDocInput.schema';
import { TalonariosUncheckedUpdateWithoutTiposDocInputObjectSchema as TalonariosUncheckedUpdateWithoutTiposDocInputObjectSchema } from './TalonariosUncheckedUpdateWithoutTiposDocInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TalonariosCreateWithoutTiposDocInputObjectSchema), z.lazy(() => TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TalonariosCreateOrConnectWithoutTiposDocInputObjectSchema).optional(),
  upsert: z.lazy(() => TalonariosUpsertWithoutTiposDocInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TalonariosWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TalonariosWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TalonariosWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TalonariosUpdateToOneWithWhereWithoutTiposDocInputObjectSchema), z.lazy(() => TalonariosUpdateWithoutTiposDocInputObjectSchema), z.lazy(() => TalonariosUncheckedUpdateWithoutTiposDocInputObjectSchema)]).optional()
}).strict();
export const TalonariosUpdateOneWithoutTiposDocNestedInputObjectSchema: z.ZodType<Prisma.TalonariosUpdateOneWithoutTiposDocNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosUpdateOneWithoutTiposDocNestedInput>;
export const TalonariosUpdateOneWithoutTiposDocNestedInputObjectZodSchema = makeSchema();
