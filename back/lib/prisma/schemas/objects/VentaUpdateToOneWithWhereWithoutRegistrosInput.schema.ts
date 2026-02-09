import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema';
import { VentaUpdateWithoutRegistrosInputObjectSchema as VentaUpdateWithoutRegistrosInputObjectSchema } from './VentaUpdateWithoutRegistrosInput.schema';
import { VentaUncheckedUpdateWithoutRegistrosInputObjectSchema as VentaUncheckedUpdateWithoutRegistrosInputObjectSchema } from './VentaUncheckedUpdateWithoutRegistrosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => VentaUpdateWithoutRegistrosInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutRegistrosInputObjectSchema)])
}).strict();
export const VentaUpdateToOneWithWhereWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.VentaUpdateToOneWithWhereWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateToOneWithWhereWithoutRegistrosInput>;
export const VentaUpdateToOneWithWhereWithoutRegistrosInputObjectZodSchema = makeSchema();
