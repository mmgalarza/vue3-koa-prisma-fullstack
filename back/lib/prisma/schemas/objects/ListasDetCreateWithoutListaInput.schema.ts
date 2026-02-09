import * as z from 'zod';
import { Prisma } from '../../client';
import { ProductosCreateNestedOneWithoutListasDetInputObjectSchema as ProductosCreateNestedOneWithoutListasDetInputObjectSchema } from './ProductosCreateNestedOneWithoutListasDetInput.schema'

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
  producto: z.lazy(() => ProductosCreateNestedOneWithoutListasDetInputObjectSchema).optional()
}).strict();
export const ListasDetCreateWithoutListaInputObjectSchema: z.ZodType<Prisma.ListasDetCreateWithoutListaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetCreateWithoutListaInput>;
export const ListasDetCreateWithoutListaInputObjectZodSchema = makeSchema();
