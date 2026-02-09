import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateWithoutListaPvpInputObjectSchema as VentaCreateWithoutListaPvpInputObjectSchema } from './VentaCreateWithoutListaPvpInput.schema';
import { VentaUncheckedCreateWithoutListaPvpInputObjectSchema as VentaUncheckedCreateWithoutListaPvpInputObjectSchema } from './VentaUncheckedCreateWithoutListaPvpInput.schema';
import { VentaCreateOrConnectWithoutListaPvpInputObjectSchema as VentaCreateOrConnectWithoutListaPvpInputObjectSchema } from './VentaCreateOrConnectWithoutListaPvpInput.schema';
import { VentaUpsertWithWhereUniqueWithoutListaPvpInputObjectSchema as VentaUpsertWithWhereUniqueWithoutListaPvpInputObjectSchema } from './VentaUpsertWithWhereUniqueWithoutListaPvpInput.schema';
import { VentaCreateManyListaPvpInputEnvelopeObjectSchema as VentaCreateManyListaPvpInputEnvelopeObjectSchema } from './VentaCreateManyListaPvpInputEnvelope.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaUpdateWithWhereUniqueWithoutListaPvpInputObjectSchema as VentaUpdateWithWhereUniqueWithoutListaPvpInputObjectSchema } from './VentaUpdateWithWhereUniqueWithoutListaPvpInput.schema';
import { VentaUpdateManyWithWhereWithoutListaPvpInputObjectSchema as VentaUpdateManyWithWhereWithoutListaPvpInputObjectSchema } from './VentaUpdateManyWithWhereWithoutListaPvpInput.schema';
import { VentaScalarWhereInputObjectSchema as VentaScalarWhereInputObjectSchema } from './VentaScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaCreateWithoutListaPvpInputObjectSchema), z.lazy(() => VentaCreateWithoutListaPvpInputObjectSchema).array(), z.lazy(() => VentaUncheckedCreateWithoutListaPvpInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutListaPvpInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VentaCreateOrConnectWithoutListaPvpInputObjectSchema), z.lazy(() => VentaCreateOrConnectWithoutListaPvpInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VentaUpsertWithWhereUniqueWithoutListaPvpInputObjectSchema), z.lazy(() => VentaUpsertWithWhereUniqueWithoutListaPvpInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VentaCreateManyListaPvpInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VentaUpdateWithWhereUniqueWithoutListaPvpInputObjectSchema), z.lazy(() => VentaUpdateWithWhereUniqueWithoutListaPvpInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VentaUpdateManyWithWhereWithoutListaPvpInputObjectSchema), z.lazy(() => VentaUpdateManyWithWhereWithoutListaPvpInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VentaScalarWhereInputObjectSchema), z.lazy(() => VentaScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VentaUncheckedUpdateManyWithoutListaPvpNestedInputObjectSchema: z.ZodType<Prisma.VentaUncheckedUpdateManyWithoutListaPvpNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUncheckedUpdateManyWithoutListaPvpNestedInput>;
export const VentaUncheckedUpdateManyWithoutListaPvpNestedInputObjectZodSchema = makeSchema();
