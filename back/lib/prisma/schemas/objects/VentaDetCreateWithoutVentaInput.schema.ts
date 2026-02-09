import * as z from 'zod';
import { Prisma } from '../../client';
import { ProductosCreateNestedOneWithoutVentaDetInputObjectSchema as ProductosCreateNestedOneWithoutVentaDetInputObjectSchema } from './ProductosCreateNestedOneWithoutVentaDetInput.schema'

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
  producto: z.lazy(() => ProductosCreateNestedOneWithoutVentaDetInputObjectSchema)
}).strict();
export const VentaDetCreateWithoutVentaInputObjectSchema: z.ZodType<Prisma.VentaDetCreateWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetCreateWithoutVentaInput>;
export const VentaDetCreateWithoutVentaInputObjectZodSchema = makeSchema();
