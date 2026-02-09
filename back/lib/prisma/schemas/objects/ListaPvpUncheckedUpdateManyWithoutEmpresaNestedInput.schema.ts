import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpCreateWithoutEmpresaInputObjectSchema as ListaPvpCreateWithoutEmpresaInputObjectSchema } from './ListaPvpCreateWithoutEmpresaInput.schema';
import { ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema as ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema } from './ListaPvpUncheckedCreateWithoutEmpresaInput.schema';
import { ListaPvpCreateOrConnectWithoutEmpresaInputObjectSchema as ListaPvpCreateOrConnectWithoutEmpresaInputObjectSchema } from './ListaPvpCreateOrConnectWithoutEmpresaInput.schema';
import { ListaPvpUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema as ListaPvpUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema } from './ListaPvpUpsertWithWhereUniqueWithoutEmpresaInput.schema';
import { ListaPvpCreateManyEmpresaInputEnvelopeObjectSchema as ListaPvpCreateManyEmpresaInputEnvelopeObjectSchema } from './ListaPvpCreateManyEmpresaInputEnvelope.schema';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './ListaPvpWhereUniqueInput.schema';
import { ListaPvpUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema as ListaPvpUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema } from './ListaPvpUpdateWithWhereUniqueWithoutEmpresaInput.schema';
import { ListaPvpUpdateManyWithWhereWithoutEmpresaInputObjectSchema as ListaPvpUpdateManyWithWhereWithoutEmpresaInputObjectSchema } from './ListaPvpUpdateManyWithWhereWithoutEmpresaInput.schema';
import { ListaPvpScalarWhereInputObjectSchema as ListaPvpScalarWhereInputObjectSchema } from './ListaPvpScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListaPvpCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ListaPvpCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ListaPvpUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ListaPvpCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ListaPvpWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ListaPvpWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ListaPvpWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ListaPvpWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ListaPvpUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ListaPvpUpdateManyWithWhereWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpUpdateManyWithWhereWithoutEmpresaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ListaPvpScalarWhereInputObjectSchema), z.lazy(() => ListaPvpScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ListaPvpUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema: z.ZodType<Prisma.ListaPvpUncheckedUpdateManyWithoutEmpresaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUncheckedUpdateManyWithoutEmpresaNestedInput>;
export const ListaPvpUncheckedUpdateManyWithoutEmpresaNestedInputObjectZodSchema = makeSchema();
