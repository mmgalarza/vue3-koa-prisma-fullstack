import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaUpdateWithoutListaPvpInputObjectSchema as VentaUpdateWithoutListaPvpInputObjectSchema } from './VentaUpdateWithoutListaPvpInput.schema';
import { VentaUncheckedUpdateWithoutListaPvpInputObjectSchema as VentaUncheckedUpdateWithoutListaPvpInputObjectSchema } from './VentaUncheckedUpdateWithoutListaPvpInput.schema';
import { VentaCreateWithoutListaPvpInputObjectSchema as VentaCreateWithoutListaPvpInputObjectSchema } from './VentaCreateWithoutListaPvpInput.schema';
import { VentaUncheckedCreateWithoutListaPvpInputObjectSchema as VentaUncheckedCreateWithoutListaPvpInputObjectSchema } from './VentaUncheckedCreateWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VentaUpdateWithoutListaPvpInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutListaPvpInputObjectSchema)]),
  create: z.union([z.lazy(() => VentaCreateWithoutListaPvpInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutListaPvpInputObjectSchema)])
}).strict();
export const VentaUpsertWithWhereUniqueWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.VentaUpsertWithWhereUniqueWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpsertWithWhereUniqueWithoutListaPvpInput>;
export const VentaUpsertWithWhereUniqueWithoutListaPvpInputObjectZodSchema = makeSchema();
