import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadWhereInputObjectSchema as ActividadWhereInputObjectSchema } from './ActividadWhereInput.schema';
import { ActividadUpdateWithoutRegistrosInputObjectSchema as ActividadUpdateWithoutRegistrosInputObjectSchema } from './ActividadUpdateWithoutRegistrosInput.schema';
import { ActividadUncheckedUpdateWithoutRegistrosInputObjectSchema as ActividadUncheckedUpdateWithoutRegistrosInputObjectSchema } from './ActividadUncheckedUpdateWithoutRegistrosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActividadWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ActividadUpdateWithoutRegistrosInputObjectSchema), z.lazy(() => ActividadUncheckedUpdateWithoutRegistrosInputObjectSchema)])
}).strict();
export const ActividadUpdateToOneWithWhereWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.ActividadUpdateToOneWithWhereWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadUpdateToOneWithWhereWithoutRegistrosInput>;
export const ActividadUpdateToOneWithWhereWithoutRegistrosInputObjectZodSchema = makeSchema();
