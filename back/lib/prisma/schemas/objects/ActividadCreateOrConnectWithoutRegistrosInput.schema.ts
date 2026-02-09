import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './ActividadWhereUniqueInput.schema';
import { ActividadCreateWithoutRegistrosInputObjectSchema as ActividadCreateWithoutRegistrosInputObjectSchema } from './ActividadCreateWithoutRegistrosInput.schema';
import { ActividadUncheckedCreateWithoutRegistrosInputObjectSchema as ActividadUncheckedCreateWithoutRegistrosInputObjectSchema } from './ActividadUncheckedCreateWithoutRegistrosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActividadWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActividadCreateWithoutRegistrosInputObjectSchema), z.lazy(() => ActividadUncheckedCreateWithoutRegistrosInputObjectSchema)])
}).strict();
export const ActividadCreateOrConnectWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.ActividadCreateOrConnectWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadCreateOrConnectWithoutRegistrosInput>;
export const ActividadCreateOrConnectWithoutRegistrosInputObjectZodSchema = makeSchema();
