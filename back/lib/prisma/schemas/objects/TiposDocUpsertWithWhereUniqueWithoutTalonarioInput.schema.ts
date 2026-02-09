import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './TiposDocWhereUniqueInput.schema';
import { TiposDocUpdateWithoutTalonarioInputObjectSchema as TiposDocUpdateWithoutTalonarioInputObjectSchema } from './TiposDocUpdateWithoutTalonarioInput.schema';
import { TiposDocUncheckedUpdateWithoutTalonarioInputObjectSchema as TiposDocUncheckedUpdateWithoutTalonarioInputObjectSchema } from './TiposDocUncheckedUpdateWithoutTalonarioInput.schema';
import { TiposDocCreateWithoutTalonarioInputObjectSchema as TiposDocCreateWithoutTalonarioInputObjectSchema } from './TiposDocCreateWithoutTalonarioInput.schema';
import { TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema as TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema } from './TiposDocUncheckedCreateWithoutTalonarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TiposDocWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TiposDocUpdateWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocUncheckedUpdateWithoutTalonarioInputObjectSchema)]),
  create: z.union([z.lazy(() => TiposDocCreateWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema)])
}).strict();
export const TiposDocUpsertWithWhereUniqueWithoutTalonarioInputObjectSchema: z.ZodType<Prisma.TiposDocUpsertWithWhereUniqueWithoutTalonarioInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUpsertWithWhereUniqueWithoutTalonarioInput>;
export const TiposDocUpsertWithWhereUniqueWithoutTalonarioInputObjectZodSchema = makeSchema();
