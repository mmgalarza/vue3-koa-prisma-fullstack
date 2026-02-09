import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesCreateWithoutEmpresaInputObjectSchema as AlmacenesCreateWithoutEmpresaInputObjectSchema } from './AlmacenesCreateWithoutEmpresaInput.schema';
import { AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema as AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema } from './AlmacenesUncheckedCreateWithoutEmpresaInput.schema';
import { AlmacenesCreateOrConnectWithoutEmpresaInputObjectSchema as AlmacenesCreateOrConnectWithoutEmpresaInputObjectSchema } from './AlmacenesCreateOrConnectWithoutEmpresaInput.schema';
import { AlmacenesUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema as AlmacenesUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema } from './AlmacenesUpsertWithWhereUniqueWithoutEmpresaInput.schema';
import { AlmacenesCreateManyEmpresaInputEnvelopeObjectSchema as AlmacenesCreateManyEmpresaInputEnvelopeObjectSchema } from './AlmacenesCreateManyEmpresaInputEnvelope.schema';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './AlmacenesWhereUniqueInput.schema';
import { AlmacenesUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema as AlmacenesUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema } from './AlmacenesUpdateWithWhereUniqueWithoutEmpresaInput.schema';
import { AlmacenesUpdateManyWithWhereWithoutEmpresaInputObjectSchema as AlmacenesUpdateManyWithWhereWithoutEmpresaInputObjectSchema } from './AlmacenesUpdateManyWithWhereWithoutEmpresaInput.schema';
import { AlmacenesScalarWhereInputObjectSchema as AlmacenesScalarWhereInputObjectSchema } from './AlmacenesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AlmacenesCreateWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AlmacenesCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AlmacenesUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AlmacenesCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AlmacenesWhereUniqueInputObjectSchema), z.lazy(() => AlmacenesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AlmacenesWhereUniqueInputObjectSchema), z.lazy(() => AlmacenesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AlmacenesWhereUniqueInputObjectSchema), z.lazy(() => AlmacenesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AlmacenesWhereUniqueInputObjectSchema), z.lazy(() => AlmacenesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AlmacenesUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AlmacenesUpdateManyWithWhereWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesUpdateManyWithWhereWithoutEmpresaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AlmacenesScalarWhereInputObjectSchema), z.lazy(() => AlmacenesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AlmacenesUpdateManyWithoutEmpresaNestedInputObjectSchema: z.ZodType<Prisma.AlmacenesUpdateManyWithoutEmpresaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesUpdateManyWithoutEmpresaNestedInput>;
export const AlmacenesUpdateManyWithoutEmpresaNestedInputObjectZodSchema = makeSchema();
