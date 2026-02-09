import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema';
import { VentaUpdateWithoutFacturaInputObjectSchema as VentaUpdateWithoutFacturaInputObjectSchema } from './VentaUpdateWithoutFacturaInput.schema';
import { VentaUncheckedUpdateWithoutFacturaInputObjectSchema as VentaUncheckedUpdateWithoutFacturaInputObjectSchema } from './VentaUncheckedUpdateWithoutFacturaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => VentaUpdateWithoutFacturaInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutFacturaInputObjectSchema)])
}).strict();
export const VentaUpdateToOneWithWhereWithoutFacturaInputObjectSchema: z.ZodType<Prisma.VentaUpdateToOneWithWhereWithoutFacturaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateToOneWithWhereWithoutFacturaInput>;
export const VentaUpdateToOneWithWhereWithoutFacturaInputObjectZodSchema = makeSchema();
