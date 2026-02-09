import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaUpdateWithoutListaPvpInputObjectSchema as VentaUpdateWithoutListaPvpInputObjectSchema } from './VentaUpdateWithoutListaPvpInput.schema';
import { VentaUncheckedUpdateWithoutListaPvpInputObjectSchema as VentaUncheckedUpdateWithoutListaPvpInputObjectSchema } from './VentaUncheckedUpdateWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VentaUpdateWithoutListaPvpInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutListaPvpInputObjectSchema)])
}).strict();
export const VentaUpdateWithWhereUniqueWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.VentaUpdateWithWhereUniqueWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateWithWhereUniqueWithoutListaPvpInput>;
export const VentaUpdateWithWhereUniqueWithoutListaPvpInputObjectZodSchema = makeSchema();
