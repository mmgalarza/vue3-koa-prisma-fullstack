import * as z from 'zod';
import { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const ventadetscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VentaDetScalarWhereInputObjectSchema), z.lazy(() => VentaDetScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VentaDetScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VentaDetScalarWhereInputObjectSchema), z.lazy(() => VentaDetScalarWhereInputObjectSchema).array()]).optional(),
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
})]).optional()
}).strict();
export const VentaDetScalarWhereInputObjectSchema: z.ZodType<Prisma.VentaDetScalarWhereInput> = ventadetscalarwhereinputSchema as unknown as z.ZodType<Prisma.VentaDetScalarWhereInput>;
export const VentaDetScalarWhereInputObjectZodSchema = ventadetscalarwhereinputSchema;
