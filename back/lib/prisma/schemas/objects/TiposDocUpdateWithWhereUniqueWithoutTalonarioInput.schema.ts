import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './TiposDocWhereUniqueInput.schema';
import { TiposDocUpdateWithoutTalonarioInputObjectSchema as TiposDocUpdateWithoutTalonarioInputObjectSchema } from './TiposDocUpdateWithoutTalonarioInput.schema';
import { TiposDocUncheckedUpdateWithoutTalonarioInputObjectSchema as TiposDocUncheckedUpdateWithoutTalonarioInputObjectSchema } from './TiposDocUncheckedUpdateWithoutTalonarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TiposDocWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TiposDocUpdateWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocUncheckedUpdateWithoutTalonarioInputObjectSchema)])
}).strict();
export const TiposDocUpdateWithWhereUniqueWithoutTalonarioInputObjectSchema: z.ZodType<Prisma.TiposDocUpdateWithWhereUniqueWithoutTalonarioInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUpdateWithWhereUniqueWithoutTalonarioInput>;
export const TiposDocUpdateWithWhereUniqueWithoutTalonarioInputObjectZodSchema = makeSchema();
