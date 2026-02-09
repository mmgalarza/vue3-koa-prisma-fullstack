import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadCreateWithoutEmpresaInputObjectSchema as ActividadCreateWithoutEmpresaInputObjectSchema } from './ActividadCreateWithoutEmpresaInput.schema';
import { ActividadUncheckedCreateWithoutEmpresaInputObjectSchema as ActividadUncheckedCreateWithoutEmpresaInputObjectSchema } from './ActividadUncheckedCreateWithoutEmpresaInput.schema';
import { ActividadCreateOrConnectWithoutEmpresaInputObjectSchema as ActividadCreateOrConnectWithoutEmpresaInputObjectSchema } from './ActividadCreateOrConnectWithoutEmpresaInput.schema';
import { ActividadUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema as ActividadUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema } from './ActividadUpsertWithWhereUniqueWithoutEmpresaInput.schema';
import { ActividadCreateManyEmpresaInputEnvelopeObjectSchema as ActividadCreateManyEmpresaInputEnvelopeObjectSchema } from './ActividadCreateManyEmpresaInputEnvelope.schema';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './ActividadWhereUniqueInput.schema';
import { ActividadUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema as ActividadUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema } from './ActividadUpdateWithWhereUniqueWithoutEmpresaInput.schema';
import { ActividadUpdateManyWithWhereWithoutEmpresaInputObjectSchema as ActividadUpdateManyWithWhereWithoutEmpresaInputObjectSchema } from './ActividadUpdateManyWithWhereWithoutEmpresaInput.schema';
import { ActividadScalarWhereInputObjectSchema as ActividadScalarWhereInputObjectSchema } from './ActividadScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActividadCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => ActividadUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActividadCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActividadUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActividadCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActividadWhereUniqueInputObjectSchema), z.lazy(() => ActividadWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActividadWhereUniqueInputObjectSchema), z.lazy(() => ActividadWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActividadWhereUniqueInputObjectSchema), z.lazy(() => ActividadWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActividadWhereUniqueInputObjectSchema), z.lazy(() => ActividadWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActividadUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActividadUpdateManyWithWhereWithoutEmpresaInputObjectSchema), z.lazy(() => ActividadUpdateManyWithWhereWithoutEmpresaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActividadScalarWhereInputObjectSchema), z.lazy(() => ActividadScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActividadUpdateManyWithoutEmpresaNestedInputObjectSchema: z.ZodType<Prisma.ActividadUpdateManyWithoutEmpresaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadUpdateManyWithoutEmpresaNestedInput>;
export const ActividadUpdateManyWithoutEmpresaNestedInputObjectZodSchema = makeSchema();
