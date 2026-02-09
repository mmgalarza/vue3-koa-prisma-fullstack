import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './CategoriasWhereUniqueInput.schema';
import { CategoriasCreateWithoutEmpresaInputObjectSchema as CategoriasCreateWithoutEmpresaInputObjectSchema } from './CategoriasCreateWithoutEmpresaInput.schema';
import { CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema as CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema } from './CategoriasUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoriasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CategoriasCreateWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const CategoriasCreateOrConnectWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.CategoriasCreateOrConnectWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasCreateOrConnectWithoutEmpresaInput>;
export const CategoriasCreateOrConnectWithoutEmpresaInputObjectZodSchema = makeSchema();
