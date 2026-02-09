import * as z from 'zod';
import { Prisma } from '../../client';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { ListaPvpUpdateOneRequiredWithoutDetallesNestedInputObjectSchema as ListaPvpUpdateOneRequiredWithoutDetallesNestedInputObjectSchema } from './ListaPvpUpdateOneRequiredWithoutDetallesNestedInput.schema';
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
  listaPvp: z.lazy(() => ListaPvpUpdateOneRequiredWithoutDetallesNestedInputObjectSchema).optional(),
  producto: z.lazy(() => ProductosUpdateOneRequiredWithoutListaPvpDetNestedInputObjectSchema).optional()
}).strict();
export const ListaPvpDetUpdateInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUpdateInput>;
export const ListaPvpDetUpdateInputObjectZodSchema = makeSchema();
