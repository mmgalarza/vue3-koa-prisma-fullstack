import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaUpdateWithoutFacturaInputObjectSchema as VentaUpdateWithoutFacturaInputObjectSchema } from './VentaUpdateWithoutFacturaInput.schema';
import { VentaUncheckedUpdateWithoutFacturaInputObjectSchema as VentaUncheckedUpdateWithoutFacturaInputObjectSchema } from './VentaUncheckedUpdateWithoutFacturaInput.schema';
import { VentaCreateWithoutFacturaInputObjectSchema as VentaCreateWithoutFacturaInputObjectSchema } from './VentaCreateWithoutFacturaInput.schema';
import { VentaUncheckedCreateWithoutFacturaInputObjectSchema as VentaUncheckedCreateWithoutFacturaInputObjectSchema } from './VentaUncheckedCreateWithoutFacturaInput.schema';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => VentaUpdateWithoutFacturaInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutFacturaInputObjectSchema)]),
  create: z.union([z.lazy(() => VentaCreateWithoutFacturaInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutFacturaInputObjectSchema)]),
  where: z.lazy(() => VentaWhereInputObjectSchema).optional()
}).strict();
export const VentaUpsertWithoutFacturaInputObjectSchema: z.ZodType<Prisma.VentaUpsertWithoutFacturaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpsertWithoutFacturaInput>;
export const VentaUpsertWithoutFacturaInputObjectZodSchema = makeSchema();
