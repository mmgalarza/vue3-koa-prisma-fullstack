import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocCreateWithoutTalonarioInputObjectSchema as TiposDocCreateWithoutTalonarioInputObjectSchema } from './TiposDocCreateWithoutTalonarioInput.schema';
import { TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema as TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema } from './TiposDocUncheckedCreateWithoutTalonarioInput.schema';
import { TiposDocCreateOrConnectWithoutTalonarioInputObjectSchema as TiposDocCreateOrConnectWithoutTalonarioInputObjectSchema } from './TiposDocCreateOrConnectWithoutTalonarioInput.schema';
import { TiposDocCreateManyTalonarioInputEnvelopeObjectSchema as TiposDocCreateManyTalonarioInputEnvelopeObjectSchema } from './TiposDocCreateManyTalonarioInputEnvelope.schema';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './TiposDocWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TiposDocCreateWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocCreateWithoutTalonarioInputObjectSchema).array(), z.lazy(() => TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TiposDocCreateOrConnectWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocCreateOrConnectWithoutTalonarioInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TiposDocCreateManyTalonarioInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TiposDocWhereUniqueInputObjectSchema), z.lazy(() => TiposDocWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TiposDocUncheckedCreateNestedManyWithoutTalonarioInputObjectSchema: z.ZodType<Prisma.TiposDocUncheckedCreateNestedManyWithoutTalonarioInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUncheckedCreateNestedManyWithoutTalonarioInput>;
export const TiposDocUncheckedCreateNestedManyWithoutTalonarioInputObjectZodSchema = makeSchema();
