import * as z from 'zod';
import { Prisma } from '../../client';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { ProductosUpdateOneRequiredWithoutListaPvpDetNestedInputObjectSchema as ProductosUpdateOneRequiredWithoutListaPvpDetNestedInputObjectSchema } from './ProductosUpdateOneRequiredWithoutListaPvpDetNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  precioVenta: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precioVenta' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  producto: z.lazy(() => ProductosUpdateOneRequiredWithoutListaPvpDetNestedInputObjectSchema).optional()
}).strict();
export const ListaPvpDetUpdateWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUpdateWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUpdateWithoutListaPvpInput>;
export const ListaPvpDetUpdateWithoutListaPvpInputObjectZodSchema = makeSchema();
