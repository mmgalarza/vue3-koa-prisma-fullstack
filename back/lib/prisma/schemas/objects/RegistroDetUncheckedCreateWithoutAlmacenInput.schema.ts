import * as z from 'zod';
import { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  idRegistroDet: z.number().int().optional(),
  idRegistro: z.number().int(),
  idProducto: z.number().int(),
  flujoAlmacen: FlujoSchema.optional(),
  cantidad: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cantidad' must be a Decimal",
})
}).strict();
export const RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema: z.ZodType<Prisma.RegistroDetUncheckedCreateWithoutAlmacenInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUncheckedCreateWithoutAlmacenInput>;
export const RegistroDetUncheckedCreateWithoutAlmacenInputObjectZodSchema = makeSchema();
