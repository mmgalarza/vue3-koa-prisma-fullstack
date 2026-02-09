import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema';
import { VentaUpdateWithoutDetallesInputObjectSchema as VentaUpdateWithoutDetallesInputObjectSchema } from './VentaUpdateWithoutDetallesInput.schema';
import { VentaUncheckedUpdateWithoutDetallesInputObjectSchema as VentaUncheckedUpdateWithoutDetallesInputObjectSchema } from './VentaUncheckedUpdateWithoutDetallesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => VentaUpdateWithoutDetallesInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutDetallesInputObjectSchema)])
}).strict();
export const VentaUpdateToOneWithWhereWithoutDetallesInputObjectSchema: z.ZodType<Prisma.VentaUpdateToOneWithWhereWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateToOneWithWhereWithoutDetallesInput>;
export const VentaUpdateToOneWithWhereWithoutDetallesInputObjectZodSchema = makeSchema();
