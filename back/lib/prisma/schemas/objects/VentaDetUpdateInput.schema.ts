import * as z from 'zod';
import { Prisma } from '../../client';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { VentaUpdateOneRequiredWithoutDetallesNestedInputObjectSchema as VentaUpdateOneRequiredWithoutDetallesNestedInputObjectSchema } from './VentaUpdateOneRequiredWithoutDetallesNestedInput.schema';
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
  venta: z.lazy(() => VentaUpdateOneRequiredWithoutDetallesNestedInputObjectSchema).optional(),
  producto: z.lazy(() => ProductosUpdateOneRequiredWithoutVentaDetNestedInputObjectSchema).optional()
}).strict();
export const VentaDetUpdateInputObjectSchema: z.ZodType<Prisma.VentaDetUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetUpdateInput>;
export const VentaDetUpdateInputObjectZodSchema = makeSchema();
