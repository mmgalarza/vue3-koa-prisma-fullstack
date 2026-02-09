import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './CategoriasWhereUniqueInput.schema';
import { CategoriasUpdateWithoutEmpresaInputObjectSchema as CategoriasUpdateWithoutEmpresaInputObjectSchema } from './CategoriasUpdateWithoutEmpresaInput.schema';
import { CategoriasUncheckedUpdateWithoutEmpresaInputObjectSchema as CategoriasUncheckedUpdateWithoutEmpresaInputObjectSchema } from './CategoriasUncheckedUpdateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoriasWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CategoriasUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => CategoriasUncheckedUpdateWithoutEmpresaInputObjectSchema)])
}).strict();
export const CategoriasUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.CategoriasUpdateWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasUpdateWithWhereUniqueWithoutEmpresaInput>;
export const CategoriasUpdateWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
