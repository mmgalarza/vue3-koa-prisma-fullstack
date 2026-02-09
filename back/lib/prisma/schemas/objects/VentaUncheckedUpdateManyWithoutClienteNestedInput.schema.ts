import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateWithoutClienteInputObjectSchema as VentaCreateWithoutClienteInputObjectSchema } from './VentaCreateWithoutClienteInput.schema';
import { VentaUncheckedCreateWithoutClienteInputObjectSchema as VentaUncheckedCreateWithoutClienteInputObjectSchema } from './VentaUncheckedCreateWithoutClienteInput.schema';
import { VentaCreateOrConnectWithoutClienteInputObjectSchema as VentaCreateOrConnectWithoutClienteInputObjectSchema } from './VentaCreateOrConnectWithoutClienteInput.schema';
import { VentaUpsertWithWhereUniqueWithoutClienteInputObjectSchema as VentaUpsertWithWhereUniqueWithoutClienteInputObjectSchema } from './VentaUpsertWithWhereUniqueWithoutClienteInput.schema';
import { VentaCreateManyClienteInputEnvelopeObjectSchema as VentaCreateManyClienteInputEnvelopeObjectSchema } from './VentaCreateManyClienteInputEnvelope.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaUpdateWithWhereUniqueWithoutClienteInputObjectSchema as VentaUpdateWithWhereUniqueWithoutClienteInputObjectSchema } from './VentaUpdateWithWhereUniqueWithoutClienteInput.schema';
import { VentaUpdateManyWithWhereWithoutClienteInputObjectSchema as VentaUpdateManyWithWhereWithoutClienteInputObjectSchema } from './VentaUpdateManyWithWhereWithoutClienteInput.schema';
import { VentaScalarWhereInputObjectSchema as VentaScalarWhereInputObjectSchema } from './VentaScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaCreateWithoutClienteInputObjectSchema), z.lazy(() => VentaCreateWithoutClienteInputObjectSchema).array(), z.lazy(() => VentaUncheckedCreateWithoutClienteInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutClienteInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VentaCreateOrConnectWithoutClienteInputObjectSchema), z.lazy(() => VentaCreateOrConnectWithoutClienteInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VentaUpsertWithWhereUniqueWithoutClienteInputObjectSchema), z.lazy(() => VentaUpsertWithWhereUniqueWithoutClienteInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VentaCreateManyClienteInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VentaUpdateWithWhereUniqueWithoutClienteInputObjectSchema), z.lazy(() => VentaUpdateWithWhereUniqueWithoutClienteInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VentaUpdateManyWithWhereWithoutClienteInputObjectSchema), z.lazy(() => VentaUpdateManyWithWhereWithoutClienteInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VentaScalarWhereInputObjectSchema), z.lazy(() => VentaScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VentaUncheckedUpdateManyWithoutClienteNestedInputObjectSchema: z.ZodType<Prisma.VentaUncheckedUpdateManyWithoutClienteNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUncheckedUpdateManyWithoutClienteNestedInput>;
export const VentaUncheckedUpdateManyWithoutClienteNestedInputObjectZodSchema = makeSchema();
