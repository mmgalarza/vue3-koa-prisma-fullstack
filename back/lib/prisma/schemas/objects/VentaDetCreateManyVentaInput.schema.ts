import * as z from 'zod';
import { Prisma } from '../../client';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  idVentaDet: z.number().int().optional(),
  idProducto: z.number().int(),
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
})
}).strict();
export const VentaDetCreateManyVentaInputObjectSchema: z.ZodType<Prisma.VentaDetCreateManyVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetCreateManyVentaInput>;
export const VentaDetCreateManyVentaInputObjectZodSchema = makeSchema();
