import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadCreateWithoutRegistrosInputObjectSchema as ActividadCreateWithoutRegistrosInputObjectSchema } from './ActividadCreateWithoutRegistrosInput.schema';
import { ActividadUncheckedCreateWithoutRegistrosInputObjectSchema as ActividadUncheckedCreateWithoutRegistrosInputObjectSchema } from './ActividadUncheckedCreateWithoutRegistrosInput.schema';
import { ActividadCreateOrConnectWithoutRegistrosInputObjectSchema as ActividadCreateOrConnectWithoutRegistrosInputObjectSchema } from './ActividadCreateOrConnectWithoutRegistrosInput.schema';
import { ActividadUpsertWithoutRegistrosInputObjectSchema as ActividadUpsertWithoutRegistrosInputObjectSchema } from './ActividadUpsertWithoutRegistrosInput.schema';
import { ActividadWhereInputObjectSchema as ActividadWhereInputObjectSchema } from './ActividadWhereInput.schema';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './ActividadWhereUniqueInput.schema';
import { ActividadUpdateToOneWithWhereWithoutRegistrosInputObjectSchema as ActividadUpdateToOneWithWhereWithoutRegistrosInputObjectSchema } from './ActividadUpdateToOneWithWhereWithoutRegistrosInput.schema';
import { ActividadUpdateWithoutRegistrosInputObjectSchema as ActividadUpdateWithoutRegistrosInputObjectSchema } from './ActividadUpdateWithoutRegistrosInput.schema';
import { ActividadUncheckedUpdateWithoutRegistrosInputObjectSchema as ActividadUncheckedUpdateWithoutRegistrosInputObjectSchema } from './ActividadUncheckedUpdateWithoutRegistrosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActividadCreateWithoutRegistrosInputObjectSchema), z.lazy(() => ActividadUncheckedCreateWithoutRegistrosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ActividadCreateOrConnectWithoutRegistrosInputObjectSchema).optional(),
  upsert: z.lazy(() => ActividadUpsertWithoutRegistrosInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ActividadWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ActividadWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ActividadWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ActividadUpdateToOneWithWhereWithoutRegistrosInputObjectSchema), z.lazy(() => ActividadUpdateWithoutRegistrosInputObjectSchema), z.lazy(() => ActividadUncheckedUpdateWithoutRegistrosInputObjectSchema)]).optional()
}).strict();
export const ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema: z.ZodType<Prisma.ActividadUpdateOneWithoutRegistrosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadUpdateOneWithoutRegistrosNestedInput>;
export const ActividadUpdateOneWithoutRegistrosNestedInputObjectZodSchema = makeSchema();
