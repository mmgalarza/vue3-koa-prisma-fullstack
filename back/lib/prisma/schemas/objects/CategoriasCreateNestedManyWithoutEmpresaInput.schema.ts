import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasCreateWithoutEmpresaInputObjectSchema as CategoriasCreateWithoutEmpresaInputObjectSchema } from './CategoriasCreateWithoutEmpresaInput.schema';
import { CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema as CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema } from './CategoriasUncheckedCreateWithoutEmpresaInput.schema';
import { CategoriasCreateOrConnectWithoutEmpresaInputObjectSchema as CategoriasCreateOrConnectWithoutEmpresaInputObjectSchema } from './CategoriasCreateOrConnectWithoutEmpresaInput.schema';
import { CategoriasCreateManyEmpresaInputEnvelopeObjectSchema as CategoriasCreateManyEmpresaInputEnvelopeObjectSchema } from './CategoriasCreateManyEmpresaInputEnvelope.schema';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './CategoriasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoriasCreateWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CategoriasCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CategoriasCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CategoriasWhereUniqueInputObjectSchema), z.lazy(() => CategoriasWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CategoriasCreateNestedManyWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.CategoriasCreateNestedManyWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasCreateNestedManyWithoutEmpresaInput>;
export const CategoriasCreateNestedManyWithoutEmpresaInputObjectZodSchema = makeSchema();
