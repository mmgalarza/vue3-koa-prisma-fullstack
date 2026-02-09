import * as z from 'zod';
import { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { VentaScalarRelationFilterObjectSchema as VentaScalarRelationFilterObjectSchema } from './VentaScalarRelationFilter.schema';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema';
import { ProductosScalarRelationFilterObjectSchema as ProductosScalarRelationFilterObjectSchema } from './ProductosScalarRelationFilter.schema';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const ventadetwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VentaDetWhereInputObjectSchema), z.lazy(() => VentaDetWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VentaDetWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VentaDetWhereInputObjectSchema), z.lazy(() => VentaDetWhereInputObjectSchema).array()]).optional(),
  idVentaDet: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idVenta: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idProducto: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  cantidad: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cantidad' must be a Decimal",
})]).optional(),
  precioUnit: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precioUnit' must be a Decimal",
})]).optional(),
  descuento: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'descuento' must be a Decimal",
})]).optional(),
  venta: z.union([z.lazy(() => VentaScalarRelationFilterObjectSchema), z.lazy(() => VentaWhereInputObjectSchema)]).optional(),
  producto: z.union([z.lazy(() => ProductosScalarRelationFilterObjectSchema), z.lazy(() => ProductosWhereInputObjectSchema)]).optional()
}).strict();
export const VentaDetWhereInputObjectSchema: z.ZodType<Prisma.VentaDetWhereInput> = ventadetwhereinputSchema as unknown as z.ZodType<Prisma.VentaDetWhereInput>;
export const VentaDetWhereInputObjectZodSchema = ventadetwhereinputSchema;
