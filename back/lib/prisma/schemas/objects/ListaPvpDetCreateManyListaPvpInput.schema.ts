import * as z from 'zod';
import { Prisma } from '../../client';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  idListaPvpDet: z.number().int().optional(),
  idProducto: z.number().int(),
  precioVenta: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precioVenta' must be a Decimal",
})
}).strict();
export const ListaPvpDetCreateManyListaPvpInputObjectSchema: z.ZodType<Prisma.ListaPvpDetCreateManyListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetCreateManyListaPvpInput>;
export const ListaPvpDetCreateManyListaPvpInputObjectZodSchema = makeSchema();
