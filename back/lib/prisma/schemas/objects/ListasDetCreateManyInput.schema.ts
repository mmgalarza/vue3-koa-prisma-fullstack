import * as z from 'zod';
import { Prisma } from '../../client';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  idListaDet: z.number().int().optional(),
  idLista: z.number().int().optional(),
  idProducto: z.number().int().optional(),
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
export const ListasDetCreateManyInputObjectSchema: z.ZodType<Prisma.ListasDetCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetCreateManyInput>;
export const ListasDetCreateManyInputObjectZodSchema = makeSchema();
