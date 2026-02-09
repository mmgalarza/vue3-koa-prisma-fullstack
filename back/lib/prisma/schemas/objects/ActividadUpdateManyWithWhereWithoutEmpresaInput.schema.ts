import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadScalarWhereInputObjectSchema as ActividadScalarWhereInputObjectSchema } from './ActividadScalarWhereInput.schema';
import { ActividadUpdateManyMutationInputObjectSchema as ActividadUpdateManyMutationInputObjectSchema } from './ActividadUpdateManyMutationInput.schema';
import { ActividadUncheckedUpdateManyWithoutEmpresaInputObjectSchema as ActividadUncheckedUpdateManyWithoutEmpresaInputObjectSchema } from './ActividadUncheckedUpdateManyWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActividadScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActividadUpdateManyMutationInputObjectSchema), z.lazy(() => ActividadUncheckedUpdateManyWithoutEmpresaInputObjectSchema)])
}).strict();
export const ActividadUpdateManyWithWhereWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ActividadUpdateManyWithWhereWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadUpdateManyWithWhereWithoutEmpresaInput>;
export const ActividadUpdateManyWithWhereWithoutEmpresaInputObjectZodSchema = makeSchema();
