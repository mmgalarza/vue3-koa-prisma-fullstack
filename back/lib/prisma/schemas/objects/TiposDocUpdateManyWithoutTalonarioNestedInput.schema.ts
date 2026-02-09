import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocCreateWithoutTalonarioInputObjectSchema as TiposDocCreateWithoutTalonarioInputObjectSchema } from './TiposDocCreateWithoutTalonarioInput.schema';
import { TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema as TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema } from './TiposDocUncheckedCreateWithoutTalonarioInput.schema';
import { TiposDocCreateOrConnectWithoutTalonarioInputObjectSchema as TiposDocCreateOrConnectWithoutTalonarioInputObjectSchema } from './TiposDocCreateOrConnectWithoutTalonarioInput.schema';
import { TiposDocUpsertWithWhereUniqueWithoutTalonarioInputObjectSchema as TiposDocUpsertWithWhereUniqueWithoutTalonarioInputObjectSchema } from './TiposDocUpsertWithWhereUniqueWithoutTalonarioInput.schema';
import { TiposDocCreateManyTalonarioInputEnvelopeObjectSchema as TiposDocCreateManyTalonarioInputEnvelopeObjectSchema } from './TiposDocCreateManyTalonarioInputEnvelope.schema';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './TiposDocWhereUniqueInput.schema';
import { TiposDocUpdateWithWhereUniqueWithoutTalonarioInputObjectSchema as TiposDocUpdateWithWhereUniqueWithoutTalonarioInputObjectSchema } from './TiposDocUpdateWithWhereUniqueWithoutTalonarioInput.schema';
import { TiposDocUpdateManyWithWhereWithoutTalonarioInputObjectSchema as TiposDocUpdateManyWithWhereWithoutTalonarioInputObjectSchema } from './TiposDocUpdateManyWithWhereWithoutTalonarioInput.schema';
import { TiposDocScalarWhereInputObjectSchema as TiposDocScalarWhereInputObjectSchema } from './TiposDocScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TiposDocCreateWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocCreateWithoutTalonarioInputObjectSchema).array(), z.lazy(() => TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TiposDocCreateOrConnectWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocCreateOrConnectWithoutTalonarioInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TiposDocUpsertWithWhereUniqueWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocUpsertWithWhereUniqueWithoutTalonarioInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TiposDocCreateManyTalonarioInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TiposDocWhereUniqueInputObjectSchema), z.lazy(() => TiposDocWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TiposDocWhereUniqueInputObjectSchema), z.lazy(() => TiposDocWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TiposDocWhereUniqueInputObjectSchema), z.lazy(() => TiposDocWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TiposDocWhereUniqueInputObjectSchema), z.lazy(() => TiposDocWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TiposDocUpdateWithWhereUniqueWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocUpdateWithWhereUniqueWithoutTalonarioInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TiposDocUpdateManyWithWhereWithoutTalonarioInputObjectSchema), z.lazy(() => TiposDocUpdateManyWithWhereWithoutTalonarioInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TiposDocScalarWhereInputObjectSchema), z.lazy(() => TiposDocScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TiposDocUpdateManyWithoutTalonarioNestedInputObjectSchema: z.ZodType<Prisma.TiposDocUpdateManyWithoutTalonarioNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUpdateManyWithoutTalonarioNestedInput>;
export const TiposDocUpdateManyWithoutTalonarioNestedInputObjectZodSchema = makeSchema();
