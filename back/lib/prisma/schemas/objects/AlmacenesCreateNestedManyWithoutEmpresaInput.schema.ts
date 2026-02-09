import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesCreateWithoutEmpresaInputObjectSchema as AlmacenesCreateWithoutEmpresaInputObjectSchema } from './AlmacenesCreateWithoutEmpresaInput.schema';
import { AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema as AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema } from './AlmacenesUncheckedCreateWithoutEmpresaInput.schema';
import { AlmacenesCreateOrConnectWithoutEmpresaInputObjectSchema as AlmacenesCreateOrConnectWithoutEmpresaInputObjectSchema } from './AlmacenesCreateOrConnectWithoutEmpresaInput.schema';
import { AlmacenesCreateManyEmpresaInputEnvelopeObjectSchema as AlmacenesCreateManyEmpresaInputEnvelopeObjectSchema } from './AlmacenesCreateManyEmpresaInputEnvelope.schema';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './AlmacenesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AlmacenesCreateWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AlmacenesCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AlmacenesCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AlmacenesWhereUniqueInputObjectSchema), z.lazy(() => AlmacenesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AlmacenesCreateNestedManyWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.AlmacenesCreateNestedManyWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesCreateNestedManyWithoutEmpresaInput>;
export const AlmacenesCreateNestedManyWithoutEmpresaInputObjectZodSchema = makeSchema();
