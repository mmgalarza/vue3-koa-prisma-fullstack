import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaUpdateWithoutDetallesInputObjectSchema as VentaUpdateWithoutDetallesInputObjectSchema } from './VentaUpdateWithoutDetallesInput.schema';
import { VentaUncheckedUpdateWithoutDetallesInputObjectSchema as VentaUncheckedUpdateWithoutDetallesInputObjectSchema } from './VentaUncheckedUpdateWithoutDetallesInput.schema';
import { VentaCreateWithoutDetallesInputObjectSchema as VentaCreateWithoutDetallesInputObjectSchema } from './VentaCreateWithoutDetallesInput.schema';
import { VentaUncheckedCreateWithoutDetallesInputObjectSchema as VentaUncheckedCreateWithoutDetallesInputObjectSchema } from './VentaUncheckedCreateWithoutDetallesInput.schema';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => VentaUpdateWithoutDetallesInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutDetallesInputObjectSchema)]),
  create: z.union([z.lazy(() => VentaCreateWithoutDetallesInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutDetallesInputObjectSchema)]),
  where: z.lazy(() => VentaWhereInputObjectSchema).optional()
}).strict();
export const VentaUpsertWithoutDetallesInputObjectSchema: z.ZodType<Prisma.VentaUpsertWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpsertWithoutDetallesInput>;
export const VentaUpsertWithoutDetallesInputObjectZodSchema = makeSchema();
