import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './VentaDetWhereUniqueInput.schema';
import { VentaDetUpdateWithoutProductoInputObjectSchema as VentaDetUpdateWithoutProductoInputObjectSchema } from './VentaDetUpdateWithoutProductoInput.schema';
import { VentaDetUncheckedUpdateWithoutProductoInputObjectSchema as VentaDetUncheckedUpdateWithoutProductoInputObjectSchema } from './VentaDetUncheckedUpdateWithoutProductoInput.schema';
import { VentaDetCreateWithoutProductoInputObjectSchema as VentaDetCreateWithoutProductoInputObjectSchema } from './VentaDetCreateWithoutProductoInput.schema';
import { VentaDetUncheckedCreateWithoutProductoInputObjectSchema as VentaDetUncheckedCreateWithoutProductoInputObjectSchema } from './VentaDetUncheckedCreateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaDetWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VentaDetUpdateWithoutProductoInputObjectSchema), z.lazy(() => VentaDetUncheckedUpdateWithoutProductoInputObjectSchema)]),
  create: z.union([z.lazy(() => VentaDetCreateWithoutProductoInputObjectSchema), z.lazy(() => VentaDetUncheckedCreateWithoutProductoInputObjectSchema)])
}).strict();
export const VentaDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema: z.ZodType<Prisma.VentaDetUpsertWithWhereUniqueWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetUpsertWithWhereUniqueWithoutProductoInput>;
export const VentaDetUpsertWithWhereUniqueWithoutProductoInputObjectZodSchema = makeSchema();
