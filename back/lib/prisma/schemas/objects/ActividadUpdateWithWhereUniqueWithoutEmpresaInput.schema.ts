import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './ActividadWhereUniqueInput.schema';
import { ActividadUpdateWithoutEmpresaInputObjectSchema as ActividadUpdateWithoutEmpresaInputObjectSchema } from './ActividadUpdateWithoutEmpresaInput.schema';
import { ActividadUncheckedUpdateWithoutEmpresaInputObjectSchema as ActividadUncheckedUpdateWithoutEmpresaInputObjectSchema } from './ActividadUncheckedUpdateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActividadWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActividadUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadUncheckedUpdateWithoutEmpresaInputObjectSchema)])
}).strict();
export const ActividadUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ActividadUpdateWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadUpdateWithWhereUniqueWithoutEmpresaInput>;
export const ActividadUpdateWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
