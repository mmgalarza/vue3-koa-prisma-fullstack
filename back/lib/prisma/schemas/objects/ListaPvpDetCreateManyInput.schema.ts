import * as z from 'zod';
import { Prisma } from '../../client';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  idListaPvpDet: z.number().int().optional(),
  idListaPvp: z.number().int(),
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
export const ListaPvpDetCreateManyInputObjectSchema: z.ZodType<Prisma.ListaPvpDetCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetCreateManyInput>;
export const ListaPvpDetCreateManyInputObjectZodSchema = makeSchema();
