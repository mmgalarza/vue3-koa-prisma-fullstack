import * as z from 'zod';
import { Prisma } from '../../client';
import { ProductosCreateNestedOneWithoutListaPvpDetInputObjectSchema as ProductosCreateNestedOneWithoutListaPvpDetInputObjectSchema } from './ProductosCreateNestedOneWithoutListaPvpDetInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  precioVenta: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precioVenta' must be a Decimal",
}),
  producto: z.lazy(() => ProductosCreateNestedOneWithoutListaPvpDetInputObjectSchema)
}).strict();
export const ListaPvpDetCreateWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.ListaPvpDetCreateWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetCreateWithoutListaPvpInput>;
export const ListaPvpDetCreateWithoutListaPvpInputObjectZodSchema = makeSchema();
