import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadCreateWithoutEmpresaInputObjectSchema as ActividadCreateWithoutEmpresaInputObjectSchema } from './ActividadCreateWithoutEmpresaInput.schema';
import { ActividadUncheckedCreateWithoutEmpresaInputObjectSchema as ActividadUncheckedCreateWithoutEmpresaInputObjectSchema } from './ActividadUncheckedCreateWithoutEmpresaInput.schema';
import { ActividadCreateOrConnectWithoutEmpresaInputObjectSchema as ActividadCreateOrConnectWithoutEmpresaInputObjectSchema } from './ActividadCreateOrConnectWithoutEmpresaInput.schema';
import { ActividadCreateManyEmpresaInputEnvelopeObjectSchema as ActividadCreateManyEmpresaInputEnvelopeObjectSchema } from './ActividadCreateManyEmpresaInputEnvelope.schema';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './ActividadWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActividadCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => ActividadUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActividadCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActividadCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActividadWhereUniqueInputObjectSchema), z.lazy(() => ActividadWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActividadCreateNestedManyWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ActividadCreateNestedManyWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadCreateNestedManyWithoutEmpresaInput>;
export const ActividadCreateNestedManyWithoutEmpresaInputObjectZodSchema = makeSchema();
