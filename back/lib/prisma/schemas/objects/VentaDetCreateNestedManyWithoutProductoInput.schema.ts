import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetCreateWithoutProductoInputObjectSchema as VentaDetCreateWithoutProductoInputObjectSchema } from './VentaDetCreateWithoutProductoInput.schema';
import { VentaDetUncheckedCreateWithoutProductoInputObjectSchema as VentaDetUncheckedCreateWithoutProductoInputObjectSchema } from './VentaDetUncheckedCreateWithoutProductoInput.schema';
import { VentaDetCreateOrConnectWithoutProductoInputObjectSchema as VentaDetCreateOrConnectWithoutProductoInputObjectSchema } from './VentaDetCreateOrConnectWithoutProductoInput.schema';
import { VentaDetCreateManyProductoInputEnvelopeObjectSchema as VentaDetCreateManyProductoInputEnvelopeObjectSchema } from './VentaDetCreateManyProductoInputEnvelope.schema';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './VentaDetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaDetCreateWithoutProductoInputObjectSchema), z.lazy(() => VentaDetCreateWithoutProductoInputObjectSchema).array(), z.lazy(() => VentaDetUncheckedCreateWithoutProductoInputObjectSchema), z.lazy(() => VentaDetUncheckedCreateWithoutProductoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VentaDetCreateOrConnectWithoutProductoInputObjectSchema), z.lazy(() => VentaDetCreateOrConnectWithoutProductoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VentaDetCreateManyProductoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VentaDetWhereUniqueInputObjectSchema), z.lazy(() => VentaDetWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VentaDetCreateNestedManyWithoutProductoInputObjectSchema: z.ZodType<Prisma.VentaDetCreateNestedManyWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetCreateNestedManyWithoutProductoInput>;
export const VentaDetCreateNestedManyWithoutProductoInputObjectZodSchema = makeSchema();
