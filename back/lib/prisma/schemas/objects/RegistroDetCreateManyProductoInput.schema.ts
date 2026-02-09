import * as z from 'zod';
import { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  idRegistroDet: z.number().int().optional(),
  idRegistro: z.number().int(),
  idAlmacen: z.number().int().optional().nullable(),
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
export const RegistroDetCreateManyProductoInputObjectSchema: z.ZodType<Prisma.RegistroDetCreateManyProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCreateManyProductoInput>;
export const RegistroDetCreateManyProductoInputObjectZodSchema = makeSchema();
