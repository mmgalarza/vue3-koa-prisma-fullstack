import * as z from 'zod';
import { Prisma } from '../../client';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { ListasUpdateOneRequiredWithoutDetallesNestedInputObjectSchema as ListasUpdateOneRequiredWithoutDetallesNestedInputObjectSchema } from './ListasUpdateOneRequiredWithoutDetallesNestedInput.schema';
import { ProductosUpdateOneRequiredWithoutListasDetNestedInputObjectSchema as ProductosUpdateOneRequiredWithoutListasDetNestedInputObjectSchema } from './ProductosUpdateOneRequiredWithoutListasDetNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  precio: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precio' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  descuento: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'descuento' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  lista: z.lazy(() => ListasUpdateOneRequiredWithoutDetallesNestedInputObjectSchema).optional(),
  producto: z.lazy(() => ProductosUpdateOneRequiredWithoutListasDetNestedInputObjectSchema).optional()
}).strict();
export const ListasDetUpdateInputObjectSchema: z.ZodType<Prisma.ListasDetUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetUpdateInput>;
export const ListasDetUpdateInputObjectZodSchema = makeSchema();
