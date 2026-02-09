import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasCreateWithoutEmpresaInputObjectSchema as CategoriasCreateWithoutEmpresaInputObjectSchema } from './CategoriasCreateWithoutEmpresaInput.schema';
import { CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema as CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema } from './CategoriasUncheckedCreateWithoutEmpresaInput.schema';
import { CategoriasCreateOrConnectWithoutEmpresaInputObjectSchema as CategoriasCreateOrConnectWithoutEmpresaInputObjectSchema } from './CategoriasCreateOrConnectWithoutEmpresaInput.schema';
import { CategoriasUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema as CategoriasUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema } from './CategoriasUpsertWithWhereUniqueWithoutEmpresaInput.schema';
import { CategoriasCreateManyEmpresaInputEnvelopeObjectSchema as CategoriasCreateManyEmpresaInputEnvelopeObjectSchema } from './CategoriasCreateManyEmpresaInputEnvelope.schema';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './CategoriasWhereUniqueInput.schema';
import { CategoriasUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema as CategoriasUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema } from './CategoriasUpdateWithWhereUniqueWithoutEmpresaInput.schema';
import { CategoriasUpdateManyWithWhereWithoutEmpresaInputObjectSchema as CategoriasUpdateManyWithWhereWithoutEmpresaInputObjectSchema } from './CategoriasUpdateManyWithWhereWithoutEmpresaInput.schema';
import { CategoriasScalarWhereInputObjectSchema as CategoriasScalarWhereInputObjectSchema } from './CategoriasScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoriasCreateWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CategoriasCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CategoriasUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CategoriasCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CategoriasWhereUniqueInputObjectSchema), z.lazy(() => CategoriasWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CategoriasWhereUniqueInputObjectSchema), z.lazy(() => CategoriasWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CategoriasWhereUniqueInputObjectSchema), z.lazy(() => CategoriasWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CategoriasWhereUniqueInputObjectSchema), z.lazy(() => CategoriasWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CategoriasUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CategoriasUpdateManyWithWhereWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasUpdateManyWithWhereWithoutEmpresaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CategoriasScalarWhereInputObjectSchema), z.lazy(() => CategoriasScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CategoriasUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema: z.ZodType<Prisma.CategoriasUncheckedUpdateManyWithoutEmpresaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasUncheckedUpdateManyWithoutEmpresaNestedInput>;
export const CategoriasUncheckedUpdateManyWithoutEmpresaNestedInputObjectZodSchema = makeSchema();
