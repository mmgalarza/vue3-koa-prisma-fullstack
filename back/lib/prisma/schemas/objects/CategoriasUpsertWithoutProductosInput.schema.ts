import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasUpdateWithoutProductosInputObjectSchema as CategoriasUpdateWithoutProductosInputObjectSchema } from './CategoriasUpdateWithoutProductosInput.schema';
import { CategoriasUncheckedUpdateWithoutProductosInputObjectSchema as CategoriasUncheckedUpdateWithoutProductosInputObjectSchema } from './CategoriasUncheckedUpdateWithoutProductosInput.schema';
import { CategoriasCreateWithoutProductosInputObjectSchema as CategoriasCreateWithoutProductosInputObjectSchema } from './CategoriasCreateWithoutProductosInput.schema';
import { CategoriasUncheckedCreateWithoutProductosInputObjectSchema as CategoriasUncheckedCreateWithoutProductosInputObjectSchema } from './CategoriasUncheckedCreateWithoutProductosInput.schema';
import { CategoriasWhereInputObjectSchema as CategoriasWhereInputObjectSchema } from './CategoriasWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CategoriasUpdateWithoutProductosInputObjectSchema), z.lazy(() => CategoriasUncheckedUpdateWithoutProductosInputObjectSchema)]),
  create: z.union([z.lazy(() => CategoriasCreateWithoutProductosInputObjectSchema), z.lazy(() => CategoriasUncheckedCreateWithoutProductosInputObjectSchema)]),
  where: z.lazy(() => CategoriasWhereInputObjectSchema).optional()
}).strict();
export const CategoriasUpsertWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriasUpsertWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasUpsertWithoutProductosInput>;
export const CategoriasUpsertWithoutProductosInputObjectZodSchema = makeSchema();
