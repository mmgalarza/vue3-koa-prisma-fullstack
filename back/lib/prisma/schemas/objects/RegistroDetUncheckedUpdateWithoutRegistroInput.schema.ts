import * as z from 'zod';
import { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { EnumFlujoFieldUpdateOperationsInputObjectSchema as EnumFlujoFieldUpdateOperationsInputObjectSchema } from './EnumFlujoFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  idRegistroDet: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  idProducto: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  idAlmacen: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  flujoAlmacen: z.union([FlujoSchema, z.lazy(() => EnumFlujoFieldUpdateOperationsInputObjectSchema)]).optional(),
  cantidad: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cantidad' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RegistroDetUncheckedUpdateWithoutRegistroInputObjectSchema: z.ZodType<Prisma.RegistroDetUncheckedUpdateWithoutRegistroInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUncheckedUpdateWithoutRegistroInput>;
export const RegistroDetUncheckedUpdateWithoutRegistroInputObjectZodSchema = makeSchema();
