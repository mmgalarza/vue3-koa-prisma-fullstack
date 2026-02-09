import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasWhereInputObjectSchema as CategoriasWhereInputObjectSchema } from './CategoriasWhereInput.schema';
import { CategoriasUpdateWithoutProductosInputObjectSchema as CategoriasUpdateWithoutProductosInputObjectSchema } from './CategoriasUpdateWithoutProductosInput.schema';
import { CategoriasUncheckedUpdateWithoutProductosInputObjectSchema as CategoriasUncheckedUpdateWithoutProductosInputObjectSchema } from './CategoriasUncheckedUpdateWithoutProductosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoriasWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CategoriasUpdateWithoutProductosInputObjectSchema), z.lazy(() => CategoriasUncheckedUpdateWithoutProductosInputObjectSchema)])
}).strict();
export const CategoriasUpdateToOneWithWhereWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriasUpdateToOneWithWhereWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasUpdateToOneWithWhereWithoutProductosInput>;
export const CategoriasUpdateToOneWithWhereWithoutProductosInputObjectZodSchema = makeSchema();
