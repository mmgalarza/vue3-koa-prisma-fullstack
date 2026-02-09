import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaUpdateWithoutClienteInputObjectSchema as VentaUpdateWithoutClienteInputObjectSchema } from './VentaUpdateWithoutClienteInput.schema';
import { VentaUncheckedUpdateWithoutClienteInputObjectSchema as VentaUncheckedUpdateWithoutClienteInputObjectSchema } from './VentaUncheckedUpdateWithoutClienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VentaUpdateWithoutClienteInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutClienteInputObjectSchema)])
}).strict();
export const VentaUpdateWithWhereUniqueWithoutClienteInputObjectSchema: z.ZodType<Prisma.VentaUpdateWithWhereUniqueWithoutClienteInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateWithWhereUniqueWithoutClienteInput>;
export const VentaUpdateWithWhereUniqueWithoutClienteInputObjectZodSchema = makeSchema();
