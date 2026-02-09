import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesCreateWithoutEmpresaInputObjectSchema as ClientesCreateWithoutEmpresaInputObjectSchema } from './ClientesCreateWithoutEmpresaInput.schema';
import { ClientesUncheckedCreateWithoutEmpresaInputObjectSchema as ClientesUncheckedCreateWithoutEmpresaInputObjectSchema } from './ClientesUncheckedCreateWithoutEmpresaInput.schema';
import { ClientesCreateOrConnectWithoutEmpresaInputObjectSchema as ClientesCreateOrConnectWithoutEmpresaInputObjectSchema } from './ClientesCreateOrConnectWithoutEmpresaInput.schema';
import { ClientesUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema as ClientesUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema } from './ClientesUpsertWithWhereUniqueWithoutEmpresaInput.schema';
import { ClientesCreateManyEmpresaInputEnvelopeObjectSchema as ClientesCreateManyEmpresaInputEnvelopeObjectSchema } from './ClientesCreateManyEmpresaInputEnvelope.schema';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './ClientesWhereUniqueInput.schema';
import { ClientesUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema as ClientesUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema } from './ClientesUpdateWithWhereUniqueWithoutEmpresaInput.schema';
import { ClientesUpdateManyWithWhereWithoutEmpresaInputObjectSchema as ClientesUpdateManyWithWhereWithoutEmpresaInputObjectSchema } from './ClientesUpdateManyWithWhereWithoutEmpresaInput.schema';
import { ClientesScalarWhereInputObjectSchema as ClientesScalarWhereInputObjectSchema } from './ClientesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientesCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => ClientesUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientesCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClientesUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientesCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ClientesWhereUniqueInputObjectSchema), z.lazy(() => ClientesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClientesWhereUniqueInputObjectSchema), z.lazy(() => ClientesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ClientesWhereUniqueInputObjectSchema), z.lazy(() => ClientesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ClientesWhereUniqueInputObjectSchema), z.lazy(() => ClientesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClientesUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClientesUpdateManyWithWhereWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesUpdateManyWithWhereWithoutEmpresaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClientesScalarWhereInputObjectSchema), z.lazy(() => ClientesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ClientesUpdateManyWithoutEmpresaNestedInputObjectSchema: z.ZodType<Prisma.ClientesUpdateManyWithoutEmpresaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesUpdateManyWithoutEmpresaNestedInput>;
export const ClientesUpdateManyWithoutEmpresaNestedInputObjectZodSchema = makeSchema();
