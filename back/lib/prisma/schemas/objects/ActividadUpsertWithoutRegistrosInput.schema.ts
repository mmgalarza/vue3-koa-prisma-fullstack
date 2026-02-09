import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadUpdateWithoutRegistrosInputObjectSchema as ActividadUpdateWithoutRegistrosInputObjectSchema } from './ActividadUpdateWithoutRegistrosInput.schema';
import { ActividadUncheckedUpdateWithoutRegistrosInputObjectSchema as ActividadUncheckedUpdateWithoutRegistrosInputObjectSchema } from './ActividadUncheckedUpdateWithoutRegistrosInput.schema';
import { ActividadCreateWithoutRegistrosInputObjectSchema as ActividadCreateWithoutRegistrosInputObjectSchema } from './ActividadCreateWithoutRegistrosInput.schema';
import { ActividadUncheckedCreateWithoutRegistrosInputObjectSchema as ActividadUncheckedCreateWithoutRegistrosInputObjectSchema } from './ActividadUncheckedCreateWithoutRegistrosInput.schema';
import { ActividadWhereInputObjectSchema as ActividadWhereInputObjectSchema } from './ActividadWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ActividadUpdateWithoutRegistrosInputObjectSchema), z.lazy(() => ActividadUncheckedUpdateWithoutRegistrosInputObjectSchema)]),
  create: z.union([z.lazy(() => ActividadCreateWithoutRegistrosInputObjectSchema), z.lazy(() => ActividadUncheckedCreateWithoutRegistrosInputObjectSchema)]),
  where: z.lazy(() => ActividadWhereInputObjectSchema).optional()
}).strict();
export const ActividadUpsertWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.ActividadUpsertWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadUpsertWithoutRegistrosInput>;
export const ActividadUpsertWithoutRegistrosInputObjectZodSchema = makeSchema();
