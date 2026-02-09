import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './ActividadWhereUniqueInput.schema';
import { ActividadCreateWithoutEmpresaInputObjectSchema as ActividadCreateWithoutEmpresaInputObjectSchema } from './ActividadCreateWithoutEmpresaInput.schema';
import { ActividadUncheckedCreateWithoutEmpresaInputObjectSchema as ActividadUncheckedCreateWithoutEmpresaInputObjectSchema } from './ActividadUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActividadWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActividadCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const ActividadCreateOrConnectWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ActividadCreateOrConnectWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadCreateOrConnectWithoutEmpresaInput>;
export const ActividadCreateOrConnectWithoutEmpresaInputObjectZodSchema = makeSchema();
