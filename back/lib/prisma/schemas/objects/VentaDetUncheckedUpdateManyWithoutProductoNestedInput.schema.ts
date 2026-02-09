import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetCreateWithoutProductoInputObjectSchema as VentaDetCreateWithoutProductoInputObjectSchema } from './VentaDetCreateWithoutProductoInput.schema';
import { VentaDetUncheckedCreateWithoutProductoInputObjectSchema as VentaDetUncheckedCreateWithoutProductoInputObjectSchema } from './VentaDetUncheckedCreateWithoutProductoInput.schema';
import { VentaDetCreateOrConnectWithoutProductoInputObjectSchema as VentaDetCreateOrConnectWithoutProductoInputObjectSchema } from './VentaDetCreateOrConnectWithoutProductoInput.schema';
import { VentaDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema as VentaDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema } from './VentaDetUpsertWithWhereUniqueWithoutProductoInput.schema';
import { VentaDetCreateManyProductoInputEnvelopeObjectSchema as VentaDetCreateManyProductoInputEnvelopeObjectSchema } from './VentaDetCreateManyProductoInputEnvelope.schema';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './VentaDetWhereUniqueInput.schema';
import { VentaDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema as VentaDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema } from './VentaDetUpdateWithWhereUniqueWithoutProductoInput.schema';
import { VentaDetUpdateManyWithWhereWithoutProductoInputObjectSchema as VentaDetUpdateManyWithWhereWithoutProductoInputObjectSchema } from './VentaDetUpdateManyWithWhereWithoutProductoInput.schema';
import { VentaDetScalarWhereInputObjectSchema as VentaDetScalarWhereInputObjectSchema } from './VentaDetScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaDetCreateWithoutProductoInputObjectSchema), z.lazy(() => VentaDetCreateWithoutProductoInputObjectSchema).array(), z.lazy(() => VentaDetUncheckedCreateWithoutProductoInputObjectSchema), z.lazy(() => VentaDetUncheckedCreateWithoutProductoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VentaDetCreateOrConnectWithoutProductoInputObjectSchema), z.lazy(() => VentaDetCreateOrConnectWithoutProductoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VentaDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema), z.lazy(() => VentaDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VentaDetCreateManyProductoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VentaDetWhereUniqueInputObjectSchema), z.lazy(() => VentaDetWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VentaDetWhereUniqueInputObjectSchema), z.lazy(() => VentaDetWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VentaDetWhereUniqueInputObjectSchema), z.lazy(() => VentaDetWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VentaDetWhereUniqueInputObjectSchema), z.lazy(() => VentaDetWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VentaDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema), z.lazy(() => VentaDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VentaDetUpdateManyWithWhereWithoutProductoInputObjectSchema), z.lazy(() => VentaDetUpdateManyWithWhereWithoutProductoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VentaDetScalarWhereInputObjectSchema), z.lazy(() => VentaDetScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VentaDetUncheckedUpdateManyWithoutProductoNestedInputObjectSchema: z.ZodType<Prisma.VentaDetUncheckedUpdateManyWithoutProductoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetUncheckedUpdateManyWithoutProductoNestedInput>;
export const VentaDetUncheckedUpdateManyWithoutProductoNestedInputObjectZodSchema = makeSchema();
