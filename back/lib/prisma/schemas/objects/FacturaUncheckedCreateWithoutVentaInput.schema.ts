import * as z from 'zod';
import { Prisma } from '../../client';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  cae: z.string().optional().nullable(),
  vencCae: z.coerce.date().optional().nullable(),
  neto: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'neto' must be a Decimal",
}),
  iva: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'iva' must be a Decimal",
}),
  total: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'total' must be a Decimal",
})
}).strict();
export const FacturaUncheckedCreateWithoutVentaInputObjectSchema: z.ZodType<Prisma.FacturaUncheckedCreateWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaUncheckedCreateWithoutVentaInput>;
export const FacturaUncheckedCreateWithoutVentaInputObjectZodSchema = makeSchema();
