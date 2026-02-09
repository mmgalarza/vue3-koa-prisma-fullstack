import * as z from 'zod';
import { Prisma } from '../../client';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  precioVenta: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precioVenta' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ListaPvpDetUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUpdateManyMutationInput>;
export const ListaPvpDetUpdateManyMutationInputObjectZodSchema = makeSchema();
