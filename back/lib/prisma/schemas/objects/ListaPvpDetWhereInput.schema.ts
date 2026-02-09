import * as z from 'zod';
import { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { ListaPvpScalarRelationFilterObjectSchema as ListaPvpScalarRelationFilterObjectSchema } from './ListaPvpScalarRelationFilter.schema';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './ListaPvpWhereInput.schema';
import { ProductosScalarRelationFilterObjectSchema as ProductosScalarRelationFilterObjectSchema } from './ProductosScalarRelationFilter.schema';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const listapvpdetwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ListaPvpDetWhereInputObjectSchema), z.lazy(() => ListaPvpDetWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ListaPvpDetWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ListaPvpDetWhereInputObjectSchema), z.lazy(() => ListaPvpDetWhereInputObjectSchema).array()]).optional(),
  idListaPvpDet: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idListaPvp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idProducto: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  precioVenta: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precioVenta' must be a Decimal",
})]).optional(),
  listaPvp: z.union([z.lazy(() => ListaPvpScalarRelationFilterObjectSchema), z.lazy(() => ListaPvpWhereInputObjectSchema)]).optional(),
  producto: z.union([z.lazy(() => ProductosScalarRelationFilterObjectSchema), z.lazy(() => ProductosWhereInputObjectSchema)]).optional()
}).strict();
export const ListaPvpDetWhereInputObjectSchema: z.ZodType<Prisma.ListaPvpDetWhereInput> = listapvpdetwhereinputSchema as unknown as z.ZodType<Prisma.ListaPvpDetWhereInput>;
export const ListaPvpDetWhereInputObjectZodSchema = listapvpdetwhereinputSchema;
