import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './TiposDocWhereUniqueInput.schema';
import { TiposDocCreateWithoutTalonarioInputObjectSchema as TiposDocCreateWithoutTalonarioInputObjectSchema } from './TiposDocCreateWithoutTalonarioInput.schema';
import { TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema as TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema } from './TiposDocUncheckedCreateWithoutTalonarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TiposDocWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TiposDocCreateWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema)])
}).strict();
export const TiposDocCreateOrConnectWithoutTalonarioInputObjectSchema: z.ZodType<Prisma.TiposDocCreateOrConnectWithoutTalonarioInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocCreateOrConnectWithoutTalonarioInput>;
export const TiposDocCreateOrConnectWithoutTalonarioInputObjectZodSchema = makeSchema();
