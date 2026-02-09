import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './VentaDetWhereUniqueInput.schema';
import { VentaDetUpdateWithoutVentaInputObjectSchema as VentaDetUpdateWithoutVentaInputObjectSchema } from './VentaDetUpdateWithoutVentaInput.schema';
import { VentaDetUncheckedUpdateWithoutVentaInputObjectSchema as VentaDetUncheckedUpdateWithoutVentaInputObjectSchema } from './VentaDetUncheckedUpdateWithoutVentaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaDetWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VentaDetUpdateWithoutVentaInputObjectSchema), z.lazy(() => VentaDetUncheckedUpdateWithoutVentaInputObjectSchema)])
}).strict();
export const VentaDetUpdateWithWhereUniqueWithoutVentaInputObjectSchema: z.ZodType<Prisma.VentaDetUpdateWithWhereUniqueWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetUpdateWithWhereUniqueWithoutVentaInput>;
export const VentaDetUpdateWithWhereUniqueWithoutVentaInputObjectZodSchema = makeSchema();
