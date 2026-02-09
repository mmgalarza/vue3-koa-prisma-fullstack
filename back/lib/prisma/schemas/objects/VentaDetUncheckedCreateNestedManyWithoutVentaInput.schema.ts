import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetCreateWithoutVentaInputObjectSchema as VentaDetCreateWithoutVentaInputObjectSchema } from './VentaDetCreateWithoutVentaInput.schema';
import { VentaDetUncheckedCreateWithoutVentaInputObjectSchema as VentaDetUncheckedCreateWithoutVentaInputObjectSchema } from './VentaDetUncheckedCreateWithoutVentaInput.schema';
import { VentaDetCreateOrConnectWithoutVentaInputObjectSchema as VentaDetCreateOrConnectWithoutVentaInputObjectSchema } from './VentaDetCreateOrConnectWithoutVentaInput.schema';
import { VentaDetCreateManyVentaInputEnvelopeObjectSchema as VentaDetCreateManyVentaInputEnvelopeObjectSchema } from './VentaDetCreateManyVentaInputEnvelope.schema';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './VentaDetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaDetCreateWithoutVentaInputObjectSchema), z.lazy(() => VentaDetCreateWithoutVentaInputObjectSchema).array(), z.lazy(() => VentaDetUncheckedCreateWithoutVentaInputObjectSchema), z.lazy(() => VentaDetUncheckedCreateWithoutVentaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VentaDetCreateOrConnectWithoutVentaInputObjectSchema), z.lazy(() => VentaDetCreateOrConnectWithoutVentaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VentaDetCreateManyVentaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VentaDetWhereUniqueInputObjectSchema), z.lazy(() => VentaDetWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VentaDetUncheckedCreateNestedManyWithoutVentaInputObjectSchema: z.ZodType<Prisma.VentaDetUncheckedCreateNestedManyWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetUncheckedCreateNestedManyWithoutVentaInput>;
export const VentaDetUncheckedCreateNestedManyWithoutVentaInputObjectZodSchema = makeSchema();
