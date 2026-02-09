import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpCreateWithoutEmpresaInputObjectSchema as ListaPvpCreateWithoutEmpresaInputObjectSchema } from './ListaPvpCreateWithoutEmpresaInput.schema';
import { ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema as ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema } from './ListaPvpUncheckedCreateWithoutEmpresaInput.schema';
import { ListaPvpCreateOrConnectWithoutEmpresaInputObjectSchema as ListaPvpCreateOrConnectWithoutEmpresaInputObjectSchema } from './ListaPvpCreateOrConnectWithoutEmpresaInput.schema';
import { ListaPvpCreateManyEmpresaInputEnvelopeObjectSchema as ListaPvpCreateManyEmpresaInputEnvelopeObjectSchema } from './ListaPvpCreateManyEmpresaInputEnvelope.schema';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './ListaPvpWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListaPvpCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ListaPvpCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ListaPvpCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ListaPvpWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ListaPvpCreateNestedManyWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ListaPvpCreateNestedManyWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateNestedManyWithoutEmpresaInput>;
export const ListaPvpCreateNestedManyWithoutEmpresaInputObjectZodSchema = makeSchema();
