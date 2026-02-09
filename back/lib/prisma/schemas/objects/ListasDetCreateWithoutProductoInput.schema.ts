import * as z from 'zod';
import { Prisma } from '../../client';
import { ListasCreateNestedOneWithoutDetallesInputObjectSchema as ListasCreateNestedOneWithoutDetallesInputObjectSchema } from './ListasCreateNestedOneWithoutDetallesInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
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
}).optional(),
  lista: z.lazy(() => ListasCreateNestedOneWithoutDetallesInputObjectSchema).optional()
}).strict();
export const ListasDetCreateWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListasDetCreateWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetCreateWithoutProductoInput>;
export const ListasDetCreateWithoutProductoInputObjectZodSchema = makeSchema();
