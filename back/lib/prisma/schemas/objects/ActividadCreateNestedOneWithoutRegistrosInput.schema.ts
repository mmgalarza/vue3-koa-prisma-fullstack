import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadCreateWithoutRegistrosInputObjectSchema as ActividadCreateWithoutRegistrosInputObjectSchema } from './ActividadCreateWithoutRegistrosInput.schema';
import { ActividadUncheckedCreateWithoutRegistrosInputObjectSchema as ActividadUncheckedCreateWithoutRegistrosInputObjectSchema } from './ActividadUncheckedCreateWithoutRegistrosInput.schema';
import { ActividadCreateOrConnectWithoutRegistrosInputObjectSchema as ActividadCreateOrConnectWithoutRegistrosInputObjectSchema } from './ActividadCreateOrConnectWithoutRegistrosInput.schema';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './ActividadWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActividadCreateWithoutRegistrosInputObjectSchema), z.lazy(() => ActividadUncheckedCreateWithoutRegistrosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ActividadCreateOrConnectWithoutRegistrosInputObjectSchema).optional(),
  connect: z.lazy(() => ActividadWhereUniqueInputObjectSchema).optional()
}).strict();
export const ActividadCreateNestedOneWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.ActividadCreateNestedOneWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadCreateNestedOneWithoutRegistrosInput>;
export const ActividadCreateNestedOneWithoutRegistrosInputObjectZodSchema = makeSchema();
