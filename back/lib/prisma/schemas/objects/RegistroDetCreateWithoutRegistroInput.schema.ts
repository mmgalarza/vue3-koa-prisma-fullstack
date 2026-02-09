import * as z from 'zod';
import { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema';
import { ProductosCreateNestedOneWithoutRegistroDetInputObjectSchema as ProductosCreateNestedOneWithoutRegistroDetInputObjectSchema } from './ProductosCreateNestedOneWithoutRegistroDetInput.schema';
import { AlmacenesCreateNestedOneWithoutRegistrosDetInputObjectSchema as AlmacenesCreateNestedOneWithoutRegistrosDetInputObjectSchema } from './AlmacenesCreateNestedOneWithoutRegistrosDetInput.schema'

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
  producto: z.lazy(() => ProductosCreateNestedOneWithoutRegistroDetInputObjectSchema),
  almacen: z.lazy(() => AlmacenesCreateNestedOneWithoutRegistrosDetInputObjectSchema).optional()
}).strict();
export const RegistroDetCreateWithoutRegistroInputObjectSchema: z.ZodType<Prisma.RegistroDetCreateWithoutRegistroInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCreateWithoutRegistroInput>;
export const RegistroDetCreateWithoutRegistroInputObjectZodSchema = makeSchema();
