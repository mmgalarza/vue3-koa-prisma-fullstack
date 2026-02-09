import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasUpdateWithoutCategoriasInputObjectSchema as EmpresasUpdateWithoutCategoriasInputObjectSchema } from './EmpresasUpdateWithoutCategoriasInput.schema';
import { EmpresasUncheckedUpdateWithoutCategoriasInputObjectSchema as EmpresasUncheckedUpdateWithoutCategoriasInputObjectSchema } from './EmpresasUncheckedUpdateWithoutCategoriasInput.schema';
import { EmpresasCreateWithoutCategoriasInputObjectSchema as EmpresasCreateWithoutCategoriasInputObjectSchema } from './EmpresasCreateWithoutCategoriasInput.schema';
import { EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema as EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema } from './EmpresasUncheckedCreateWithoutCategoriasInput.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EmpresasUpdateWithoutCategoriasInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutCategoriasInputObjectSchema)]),
  create: z.union([z.lazy(() => EmpresasCreateWithoutCategoriasInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema)]),
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional()
}).strict();
export const EmpresasUpsertWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.EmpresasUpsertWithoutCategoriasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpsertWithoutCategoriasInput>;
export const EmpresasUpsertWithoutCategoriasInputObjectZodSchema = makeSchema();
