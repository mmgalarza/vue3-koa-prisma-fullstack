import * as z from 'zod';
import { Prisma } from '../../client';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { ProductosUpdateOneRequiredWithoutVentaDetNestedInputObjectSchema as ProductosUpdateOneRequiredWithoutVentaDetNestedInputObjectSchema } from './ProductosUpdateOneRequiredWithoutVentaDetNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  cantidad: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cantidad' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  precioUnit: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precioUnit' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  descuento: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'descuento' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  producto: z.lazy(() => ProductosUpdateOneRequiredWithoutVentaDetNestedInputObjectSchema).optional()
}).strict();
export const VentaDetUpdateWithoutVentaInputObjectSchema: z.ZodType<Prisma.VentaDetUpdateWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetUpdateWithoutVentaInput>;
export const VentaDetUpdateWithoutVentaInputObjectZodSchema = makeSchema();
