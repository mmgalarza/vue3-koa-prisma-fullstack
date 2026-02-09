import * as z from 'zod';
import { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema';
import { RegistroCreateNestedOneWithoutDetallesInputObjectSchema as RegistroCreateNestedOneWithoutDetallesInputObjectSchema } from './RegistroCreateNestedOneWithoutDetallesInput.schema';
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
  registro: z.lazy(() => RegistroCreateNestedOneWithoutDetallesInputObjectSchema),
  producto: z.lazy(() => ProductosCreateNestedOneWithoutRegistroDetInputObjectSchema),
  almacen: z.lazy(() => AlmacenesCreateNestedOneWithoutRegistrosDetInputObjectSchema).optional()
}).strict();
export const RegistroDetCreateInputObjectSchema: z.ZodType<Prisma.RegistroDetCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCreateInput>;
export const RegistroDetCreateInputObjectZodSchema = makeSchema();
