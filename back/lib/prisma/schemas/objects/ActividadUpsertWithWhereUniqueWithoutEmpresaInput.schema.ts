import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './ActividadWhereUniqueInput.schema';
import { ActividadUpdateWithoutEmpresaInputObjectSchema as ActividadUpdateWithoutEmpresaInputObjectSchema } from './ActividadUpdateWithoutEmpresaInput.schema';
import { ActividadUncheckedUpdateWithoutEmpresaInputObjectSchema as ActividadUncheckedUpdateWithoutEmpresaInputObjectSchema } from './ActividadUncheckedUpdateWithoutEmpresaInput.schema';
import { ActividadCreateWithoutEmpresaInputObjectSchema as ActividadCreateWithoutEmpresaInputObjectSchema } from './ActividadCreateWithoutEmpresaInput.schema';
import { ActividadUncheckedCreateWithoutEmpresaInputObjectSchema as ActividadUncheckedCreateWithoutEmpresaInputObjectSchema } from './ActividadUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActividadWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActividadUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadUncheckedUpdateWithoutEmpresaInputObjectSchema)]),
  create: z.union([z.lazy(() => ActividadCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const ActividadUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ActividadUpsertWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadUpsertWithWhereUniqueWithoutEmpresaInput>;
export const ActividadUpsertWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
