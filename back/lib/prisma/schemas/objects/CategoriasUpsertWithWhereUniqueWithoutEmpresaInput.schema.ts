import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './CategoriasWhereUniqueInput.schema';
import { CategoriasUpdateWithoutEmpresaInputObjectSchema as CategoriasUpdateWithoutEmpresaInputObjectSchema } from './CategoriasUpdateWithoutEmpresaInput.schema';
import { CategoriasUncheckedUpdateWithoutEmpresaInputObjectSchema as CategoriasUncheckedUpdateWithoutEmpresaInputObjectSchema } from './CategoriasUncheckedUpdateWithoutEmpresaInput.schema';
import { CategoriasCreateWithoutEmpresaInputObjectSchema as CategoriasCreateWithoutEmpresaInputObjectSchema } from './CategoriasCreateWithoutEmpresaInput.schema';
import { CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema as CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema } from './CategoriasUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoriasWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CategoriasUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasUncheckedUpdateWithoutEmpresaInputObjectSchema)]),
  create: z.union([z.lazy(() => CategoriasCreateWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const CategoriasUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.CategoriasUpsertWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasUpsertWithWhereUniqueWithoutEmpresaInput>;
export const CategoriasUpsertWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
