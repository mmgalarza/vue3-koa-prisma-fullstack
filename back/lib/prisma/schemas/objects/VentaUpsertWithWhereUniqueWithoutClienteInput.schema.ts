import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaUpdateWithoutClienteInputObjectSchema as VentaUpdateWithoutClienteInputObjectSchema } from './VentaUpdateWithoutClienteInput.schema';
import { VentaUncheckedUpdateWithoutClienteInputObjectSchema as VentaUncheckedUpdateWithoutClienteInputObjectSchema } from './VentaUncheckedUpdateWithoutClienteInput.schema';
import { VentaCreateWithoutClienteInputObjectSchema as VentaCreateWithoutClienteInputObjectSchema } from './VentaCreateWithoutClienteInput.schema';
import { VentaUncheckedCreateWithoutClienteInputObjectSchema as VentaUncheckedCreateWithoutClienteInputObjectSchema } from './VentaUncheckedCreateWithoutClienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VentaUpdateWithoutClienteInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutClienteInputObjectSchema)]),
  create: z.union([z.lazy(() => VentaCreateWithoutClienteInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutClienteInputObjectSchema)])
}).strict();
export const VentaUpsertWithWhereUniqueWithoutClienteInputObjectSchema: z.ZodType<Prisma.VentaUpsertWithWhereUniqueWithoutClienteInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpsertWithWhereUniqueWithoutClienteInput>;
export const VentaUpsertWithWhereUniqueWithoutClienteInputObjectZodSchema = makeSchema();
