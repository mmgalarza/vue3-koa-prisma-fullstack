import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const categoriasscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CategoriasScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CategoriasScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CategoriasScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CategoriasScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CategoriasScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idCategoria: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(80)]).optional(),
  descripcion: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  icono: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const CategoriasScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CategoriasScalarWhereWithAggregatesInput> = categoriasscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CategoriasScalarWhereWithAggregatesInput>;
export const CategoriasScalarWhereWithAggregatesInputObjectZodSchema = categoriasscalarwherewithaggregatesinputSchema;
