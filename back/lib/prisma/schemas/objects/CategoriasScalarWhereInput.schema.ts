import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const categoriasscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CategoriasScalarWhereInputObjectSchema), z.lazy(() => CategoriasScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CategoriasScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CategoriasScalarWhereInputObjectSchema), z.lazy(() => CategoriasScalarWhereInputObjectSchema).array()]).optional(),
  idCategoria: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  descripcion: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  icono: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const CategoriasScalarWhereInputObjectSchema: z.ZodType<Prisma.CategoriasScalarWhereInput> = categoriasscalarwhereinputSchema as unknown as z.ZodType<Prisma.CategoriasScalarWhereInput>;
export const CategoriasScalarWhereInputObjectZodSchema = categoriasscalarwhereinputSchema;
