import * as z from 'zod';
import { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  idListaPvpDet: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  idProducto: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  precioVenta: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precioVenta' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ListaPvpDetUncheckedUpdateWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUncheckedUpdateWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUncheckedUpdateWithoutListaPvpInput>;
export const ListaPvpDetUncheckedUpdateWithoutListaPvpInputObjectZodSchema = makeSchema();
