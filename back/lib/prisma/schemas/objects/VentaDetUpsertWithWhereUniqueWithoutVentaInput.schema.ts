import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './VentaDetWhereUniqueInput.schema';
import { VentaDetUpdateWithoutVentaInputObjectSchema as VentaDetUpdateWithoutVentaInputObjectSchema } from './VentaDetUpdateWithoutVentaInput.schema';
import { VentaDetUncheckedUpdateWithoutVentaInputObjectSchema as VentaDetUncheckedUpdateWithoutVentaInputObjectSchema } from './VentaDetUncheckedUpdateWithoutVentaInput.schema';
import { VentaDetCreateWithoutVentaInputObjectSchema as VentaDetCreateWithoutVentaInputObjectSchema } from './VentaDetCreateWithoutVentaInput.schema';
import { VentaDetUncheckedCreateWithoutVentaInputObjectSchema as VentaDetUncheckedCreateWithoutVentaInputObjectSchema } from './VentaDetUncheckedCreateWithoutVentaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaDetWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VentaDetUpdateWithoutVentaInputObjectSchema), z.lazy(() => VentaDetUncheckedUpdateWithoutVentaInputObjectSchema)]),
  create: z.union([z.lazy(() => VentaDetCreateWithoutVentaInputObjectSchema), z.lazy(() => VentaDetUncheckedCreateWithoutVentaInputObjectSchema)])
}).strict();
export const VentaDetUpsertWithWhereUniqueWithoutVentaInputObjectSchema: z.ZodType<Prisma.VentaDetUpsertWithWhereUniqueWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetUpsertWithWhereUniqueWithoutVentaInput>;
export const VentaDetUpsertWithWhereUniqueWithoutVentaInputObjectZodSchema = makeSchema();
