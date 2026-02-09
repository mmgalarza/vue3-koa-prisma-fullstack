import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './VentaDetWhereUniqueInput.schema';
import { VentaDetUpdateWithoutProductoInputObjectSchema as VentaDetUpdateWithoutProductoInputObjectSchema } from './VentaDetUpdateWithoutProductoInput.schema';
import { VentaDetUncheckedUpdateWithoutProductoInputObjectSchema as VentaDetUncheckedUpdateWithoutProductoInputObjectSchema } from './VentaDetUncheckedUpdateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaDetWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VentaDetUpdateWithoutProductoInputObjectSchema), z.lazy(() => VentaDetUncheckedUpdateWithoutProductoInputObjectSchema)])
}).strict();
export const VentaDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema: z.ZodType<Prisma.VentaDetUpdateWithWhereUniqueWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetUpdateWithWhereUniqueWithoutProductoInput>;
export const VentaDetUpdateWithWhereUniqueWithoutProductoInputObjectZodSchema = makeSchema();
