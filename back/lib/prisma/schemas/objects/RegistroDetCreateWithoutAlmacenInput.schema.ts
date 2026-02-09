import * as z from 'zod';
import { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema';
import { RegistroCreateNestedOneWithoutDetallesInputObjectSchema as RegistroCreateNestedOneWithoutDetallesInputObjectSchema } from './RegistroCreateNestedOneWithoutDetallesInput.schema';
import { ProductosCreateNestedOneWithoutRegistroDetInputObjectSchema as ProductosCreateNestedOneWithoutRegistroDetInputObjectSchema } from './ProductosCreateNestedOneWithoutRegistroDetInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  flujoAlmacen: FlujoSchema.optional(),
  cantidad: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cantidad' must be a Decimal",
}),
  registro: z.lazy(() => RegistroCreateNestedOneWithoutDetallesInputObjectSchema),
  producto: z.lazy(() => ProductosCreateNestedOneWithoutRegistroDetInputObjectSchema)
}).strict();
export const RegistroDetCreateWithoutAlmacenInputObjectSchema: z.ZodType<Prisma.RegistroDetCreateWithoutAlmacenInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCreateWithoutAlmacenInput>;
export const RegistroDetCreateWithoutAlmacenInputObjectZodSchema = makeSchema();
