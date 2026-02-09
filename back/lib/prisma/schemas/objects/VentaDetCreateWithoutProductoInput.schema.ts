import * as z from 'zod';
import { Prisma } from '../../client';
import { VentaCreateNestedOneWithoutDetallesInputObjectSchema as VentaCreateNestedOneWithoutDetallesInputObjectSchema } from './VentaCreateNestedOneWithoutDetallesInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  cantidad: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cantidad' must be a Decimal",
}),
  precioUnit: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precioUnit' must be a Decimal",
}),
  descuento: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'descuento' must be a Decimal",
}),
  venta: z.lazy(() => VentaCreateNestedOneWithoutDetallesInputObjectSchema)
}).strict();
export const VentaDetCreateWithoutProductoInputObjectSchema: z.ZodType<Prisma.VentaDetCreateWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetCreateWithoutProductoInput>;
export const VentaDetCreateWithoutProductoInputObjectZodSchema = makeSchema();
