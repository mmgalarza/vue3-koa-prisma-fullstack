import * as z from 'zod';
import { Prisma } from '../../client';
import { VentaCreateNestedOneWithoutDetallesInputObjectSchema as VentaCreateNestedOneWithoutDetallesInputObjectSchema } from './VentaCreateNestedOneWithoutDetallesInput.schema';
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
  venta: z.lazy(() => VentaCreateNestedOneWithoutDetallesInputObjectSchema),
  producto: z.lazy(() => ProductosCreateNestedOneWithoutVentaDetInputObjectSchema)
}).strict();
export const VentaDetCreateInputObjectSchema: z.ZodType<Prisma.VentaDetCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetCreateInput>;
export const VentaDetCreateInputObjectZodSchema = makeSchema();
