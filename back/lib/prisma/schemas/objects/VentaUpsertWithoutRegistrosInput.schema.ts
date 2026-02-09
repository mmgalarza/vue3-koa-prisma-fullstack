import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaUpdateWithoutRegistrosInputObjectSchema as VentaUpdateWithoutRegistrosInputObjectSchema } from './VentaUpdateWithoutRegistrosInput.schema';
import { VentaUncheckedUpdateWithoutRegistrosInputObjectSchema as VentaUncheckedUpdateWithoutRegistrosInputObjectSchema } from './VentaUncheckedUpdateWithoutRegistrosInput.schema';
import { VentaCreateWithoutRegistrosInputObjectSchema as VentaCreateWithoutRegistrosInputObjectSchema } from './VentaCreateWithoutRegistrosInput.schema';
import { VentaUncheckedCreateWithoutRegistrosInputObjectSchema as VentaUncheckedCreateWithoutRegistrosInputObjectSchema } from './VentaUncheckedCreateWithoutRegistrosInput.schema';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => VentaUpdateWithoutRegistrosInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutRegistrosInputObjectSchema)]),
  create: z.union([z.lazy(() => VentaCreateWithoutRegistrosInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutRegistrosInputObjectSchema)]),
  where: z.lazy(() => VentaWhereInputObjectSchema).optional()
}).strict();
export const VentaUpsertWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.VentaUpsertWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpsertWithoutRegistrosInput>;
export const VentaUpsertWithoutRegistrosInputObjectZodSchema = makeSchema();
