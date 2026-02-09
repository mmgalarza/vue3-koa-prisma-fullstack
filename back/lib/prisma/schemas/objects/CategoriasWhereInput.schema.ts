import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EmpresasScalarRelationFilterObjectSchema as EmpresasScalarRelationFilterObjectSchema } from './EmpresasScalarRelationFilter.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { ProductosListRelationFilterObjectSchema as ProductosListRelationFilterObjectSchema } from './ProductosListRelationFilter.schema'

const categoriaswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CategoriasWhereInputObjectSchema), z.lazy(() => CategoriasWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CategoriasWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CategoriasWhereInputObjectSchema), z.lazy(() => CategoriasWhereInputObjectSchema).array()]).optional(),
  idCategoria: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(80)]).optional(),
  descripcion: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  icono: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  empresa: z.union([z.lazy(() => EmpresasScalarRelationFilterObjectSchema), z.lazy(() => EmpresasWhereInputObjectSchema)]).optional(),
  productos: z.lazy(() => ProductosListRelationFilterObjectSchema).optional()
}).strict();
export const CategoriasWhereInputObjectSchema: z.ZodType<Prisma.CategoriasWhereInput> = categoriaswhereinputSchema as unknown as z.ZodType<Prisma.CategoriasWhereInput>;
export const CategoriasWhereInputObjectZodSchema = categoriaswhereinputSchema;
