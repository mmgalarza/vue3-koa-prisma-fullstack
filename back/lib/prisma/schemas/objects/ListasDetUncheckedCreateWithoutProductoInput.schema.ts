import * as z from 'zod';
import { Prisma } from '../../client';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  idListaDet: z.number().int().optional(),
  idLista: z.number().int().optional(),
  precio: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precio' must be a Decimal",
}).optional(),
  descuento: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'descuento' must be a Decimal",
}).optional()
}).strict();
export const ListasDetUncheckedCreateWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListasDetUncheckedCreateWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetUncheckedCreateWithoutProductoInput>;
export const ListasDetUncheckedCreateWithoutProductoInputObjectZodSchema = makeSchema();
