import * as z from 'zod';
import { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const ventadetscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => VentaDetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VentaDetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VentaDetScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VentaDetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VentaDetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idVentaDet: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idVenta: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idProducto: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  cantidad: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cantidad' must be a Decimal",
})]).optional(),
  precioUnit: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precioUnit' must be a Decimal",
})]).optional(),
  descuento: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'descuento' must be a Decimal",
})]).optional()
}).strict();
export const VentaDetScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.VentaDetScalarWhereWithAggregatesInput> = ventadetscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.VentaDetScalarWhereWithAggregatesInput>;
export const VentaDetScalarWhereWithAggregatesInputObjectZodSchema = ventadetscalarwherewithaggregatesinputSchema;
