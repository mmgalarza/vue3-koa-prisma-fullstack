import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { CategoriasScalarRelationFilterObjectSchema as CategoriasScalarRelationFilterObjectSchema } from './CategoriasScalarRelationFilter.schema';
import { CategoriasWhereInputObjectSchema as CategoriasWhereInputObjectSchema } from './CategoriasWhereInput.schema';
import { ListasDetListRelationFilterObjectSchema as ListasDetListRelationFilterObjectSchema } from './ListasDetListRelationFilter.schema';
import { ListaPvpDetListRelationFilterObjectSchema as ListaPvpDetListRelationFilterObjectSchema } from './ListaPvpDetListRelationFilter.schema';
import { VentaDetListRelationFilterObjectSchema as VentaDetListRelationFilterObjectSchema } from './VentaDetListRelationFilter.schema';
import { RegistroDetListRelationFilterObjectSchema as RegistroDetListRelationFilterObjectSchema } from './RegistroDetListRelationFilter.schema'

const productoswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductosWhereInputObjectSchema), z.lazy(() => ProductosWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductosWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductosWhereInputObjectSchema), z.lazy(() => ProductosWhereInputObjectSchema).array()]).optional(),
  idProducto: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(120)]).optional(),
  idCategoria: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  descripcion: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(200)]).optional().nullable(),
  imagen: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  codigo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(40)]).optional().nullable(),
  unidad: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  categoria: z.union([z.lazy(() => CategoriasScalarRelationFilterObjectSchema), z.lazy(() => CategoriasWhereInputObjectSchema)]).optional(),
  listasDet: z.lazy(() => ListasDetListRelationFilterObjectSchema).optional(),
  listaPvpDet: z.lazy(() => ListaPvpDetListRelationFilterObjectSchema).optional(),
  ventaDet: z.lazy(() => VentaDetListRelationFilterObjectSchema).optional(),
  registroDet: z.lazy(() => RegistroDetListRelationFilterObjectSchema).optional()
}).strict();
export const ProductosWhereInputObjectSchema: z.ZodType<Prisma.ProductosWhereInput> = productoswhereinputSchema as unknown as z.ZodType<Prisma.ProductosWhereInput>;
export const ProductosWhereInputObjectZodSchema = productoswhereinputSchema;
