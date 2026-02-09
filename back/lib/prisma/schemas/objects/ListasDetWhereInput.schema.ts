import * as z from 'zod';
import { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { ListasScalarRelationFilterObjectSchema as ListasScalarRelationFilterObjectSchema } from './ListasScalarRelationFilter.schema';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './ListasWhereInput.schema';
import { ProductosScalarRelationFilterObjectSchema as ProductosScalarRelationFilterObjectSchema } from './ProductosScalarRelationFilter.schema';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const listasdetwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ListasDetWhereInputObjectSchema), z.lazy(() => ListasDetWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ListasDetWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ListasDetWhereInputObjectSchema), z.lazy(() => ListasDetWhereInputObjectSchema).array()]).optional(),
  idListaDet: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idLista: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idProducto: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  precio: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precio' must be a Decimal",
})]).optional(),
  descuento: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'descuento' must be a Decimal",
})]).optional(),
  lista: z.union([z.lazy(() => ListasScalarRelationFilterObjectSchema), z.lazy(() => ListasWhereInputObjectSchema)]).optional(),
  producto: z.union([z.lazy(() => ProductosScalarRelationFilterObjectSchema), z.lazy(() => ProductosWhereInputObjectSchema)]).optional()
}).strict();
export const ListasDetWhereInputObjectSchema: z.ZodType<Prisma.ListasDetWhereInput> = listasdetwhereinputSchema as unknown as z.ZodType<Prisma.ListasDetWhereInput>;
export const ListasDetWhereInputObjectZodSchema = listasdetwhereinputSchema;
