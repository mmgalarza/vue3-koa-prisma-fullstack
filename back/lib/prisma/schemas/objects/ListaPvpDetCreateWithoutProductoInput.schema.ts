import * as z from 'zod';
import { Prisma } from '../../client';
import { ListaPvpCreateNestedOneWithoutDetallesInputObjectSchema as ListaPvpCreateNestedOneWithoutDetallesInputObjectSchema } from './ListaPvpCreateNestedOneWithoutDetallesInput.schema'

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
  listaPvp: z.lazy(() => ListaPvpCreateNestedOneWithoutDetallesInputObjectSchema)
}).strict();
export const ListaPvpDetCreateWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListaPvpDetCreateWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetCreateWithoutProductoInput>;
export const ListaPvpDetCreateWithoutProductoInputObjectZodSchema = makeSchema();
