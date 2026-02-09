import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetCreateWithoutVentaInputObjectSchema as VentaDetCreateWithoutVentaInputObjectSchema } from './VentaDetCreateWithoutVentaInput.schema';
import { VentaDetUncheckedCreateWithoutVentaInputObjectSchema as VentaDetUncheckedCreateWithoutVentaInputObjectSchema } from './VentaDetUncheckedCreateWithoutVentaInput.schema';
import { VentaDetCreateOrConnectWithoutVentaInputObjectSchema as VentaDetCreateOrConnectWithoutVentaInputObjectSchema } from './VentaDetCreateOrConnectWithoutVentaInput.schema';
import { VentaDetUpsertWithWhereUniqueWithoutVentaInputObjectSchema as VentaDetUpsertWithWhereUniqueWithoutVentaInputObjectSchema } from './VentaDetUpsertWithWhereUniqueWithoutVentaInput.schema';
import { VentaDetCreateManyVentaInputEnvelopeObjectSchema as VentaDetCreateManyVentaInputEnvelopeObjectSchema } from './VentaDetCreateManyVentaInputEnvelope.schema';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './VentaDetWhereUniqueInput.schema';
import { VentaDetUpdateWithWhereUniqueWithoutVentaInputObjectSchema as VentaDetUpdateWithWhereUniqueWithoutVentaInputObjectSchema } from './VentaDetUpdateWithWhereUniqueWithoutVentaInput.schema';
import { VentaDetUpdateManyWithWhereWithoutVentaInputObjectSchema as VentaDetUpdateManyWithWhereWithoutVentaInputObjectSchema } from './VentaDetUpdateManyWithWhereWithoutVentaInput.schema';
import { VentaDetScalarWhereInputObjectSchema as VentaDetScalarWhereInputObjectSchema } from './VentaDetScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaDetCreateWithoutVentaInputObjectSchema), z.lazy(() => VentaDetCreateWithoutVentaInputObjectSchema).array(), z.lazy(() => VentaDetUncheckedCreateWithoutVentaInputObjectSchema), z.lazy(() => VentaDetUncheckedCreateWithoutVentaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VentaDetCreateOrConnectWithoutVentaInputObjectSchema), z.lazy(() => VentaDetCreateOrConnectWithoutVentaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VentaDetUpsertWithWhereUniqueWithoutVentaInputObjectSchema), z.lazy(() => VentaDetUpsertWithWhereUniqueWithoutVentaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VentaDetCreateManyVentaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VentaDetWhereUniqueInputObjectSchema), z.lazy(() => VentaDetWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VentaDetWhereUniqueInputObjectSchema), z.lazy(() => VentaDetWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VentaDetWhereUniqueInputObjectSchema), z.lazy(() => VentaDetWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VentaDetWhereUniqueInputObjectSchema), z.lazy(() => VentaDetWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VentaDetUpdateWithWhereUniqueWithoutVentaInputObjectSchema), z.lazy(() => VentaDetUpdateWithWhereUniqueWithoutVentaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VentaDetUpdateManyWithWhereWithoutVentaInputObjectSchema), z.lazy(() => VentaDetUpdateManyWithWhereWithoutVentaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VentaDetScalarWhereInputObjectSchema), z.lazy(() => VentaDetScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VentaDetUpdateManyWithoutVentaNestedInputObjectSchema: z.ZodType<Prisma.VentaDetUpdateManyWithoutVentaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetUpdateManyWithoutVentaNestedInput>;
export const VentaDetUpdateManyWithoutVentaNestedInputObjectZodSchema = makeSchema();
