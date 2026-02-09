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
export const ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUncheckedCreateWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUncheckedCreateWithoutListaPvpInput>;
export const ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectZodSchema = makeSchema();
