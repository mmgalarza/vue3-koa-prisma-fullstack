import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const productosscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductosScalarWhereInputObjectSchema), z.lazy(() => ProductosScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductosScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductosScalarWhereInputObjectSchema), z.lazy(() => ProductosScalarWhereInputObjectSchema).array()]).optional(),
  idProducto: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  idCategoria: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  descripcion: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  imagen: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  codigo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  unidad: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const ProductosScalarWhereInputObjectSchema: z.ZodType<Prisma.ProductosScalarWhereInput> = productosscalarwhereinputSchema as unknown as z.ZodType<Prisma.ProductosScalarWhereInput>;
export const ProductosScalarWhereInputObjectZodSchema = productosscalarwhereinputSchema;
