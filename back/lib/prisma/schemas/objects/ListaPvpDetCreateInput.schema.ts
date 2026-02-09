import * as z from 'zod';
import { Prisma } from '../../client';
import { ListaPvpCreateNestedOneWithoutDetallesInputObjectSchema as ListaPvpCreateNestedOneWithoutDetallesInputObjectSchema } from './ListaPvpCreateNestedOneWithoutDetallesInput.schema';
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
  listaPvp: z.lazy(() => ListaPvpCreateNestedOneWithoutDetallesInputObjectSchema),
  producto: z.lazy(() => ProductosCreateNestedOneWithoutListaPvpDetInputObjectSchema)
}).strict();
export const ListaPvpDetCreateInputObjectSchema: z.ZodType<Prisma.ListaPvpDetCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetCreateInput>;
export const ListaPvpDetCreateInputObjectZodSchema = makeSchema();
