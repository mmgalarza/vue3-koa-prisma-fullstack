import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './VentaDetWhereUniqueInput.schema';
import { VentaDetCreateWithoutProductoInputObjectSchema as VentaDetCreateWithoutProductoInputObjectSchema } from './VentaDetCreateWithoutProductoInput.schema';
import { VentaDetUncheckedCreateWithoutProductoInputObjectSchema as VentaDetUncheckedCreateWithoutProductoInputObjectSchema } from './VentaDetUncheckedCreateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaDetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VentaDetCreateWithoutProductoInputObjectSchema), z.lazy(() => VentaDetUncheckedCreateWithoutProductoInputObjectSchema)])
}).strict();
export const VentaDetCreateOrConnectWithoutProductoInputObjectSchema: z.ZodType<Prisma.VentaDetCreateOrConnectWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetCreateOrConnectWithoutProductoInput>;
export const VentaDetCreateOrConnectWithoutProductoInputObjectZodSchema = makeSchema();
