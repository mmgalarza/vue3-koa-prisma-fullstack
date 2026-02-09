import * as z from 'zod';
import { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema';
import { EnumFlujoFieldUpdateOperationsInputObjectSchema as EnumFlujoFieldUpdateOperationsInputObjectSchema } from './EnumFlujoFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { RegistroUpdateOneRequiredWithoutDetallesNestedInputObjectSchema as RegistroUpdateOneRequiredWithoutDetallesNestedInputObjectSchema } from './RegistroUpdateOneRequiredWithoutDetallesNestedInput.schema';
import { ProductosUpdateOneRequiredWithoutRegistroDetNestedInputObjectSchema as ProductosUpdateOneRequiredWithoutRegistroDetNestedInputObjectSchema } from './ProductosUpdateOneRequiredWithoutRegistroDetNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  flujoAlmacen: z.union([FlujoSchema, z.lazy(() => EnumFlujoFieldUpdateOperationsInputObjectSchema)]).optional(),
  cantidad: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cantidad' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  registro: z.lazy(() => RegistroUpdateOneRequiredWithoutDetallesNestedInputObjectSchema).optional(),
  producto: z.lazy(() => ProductosUpdateOneRequiredWithoutRegistroDetNestedInputObjectSchema).optional()
}).strict();
export const RegistroDetUpdateWithoutAlmacenInputObjectSchema: z.ZodType<Prisma.RegistroDetUpdateWithoutAlmacenInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpdateWithoutAlmacenInput>;
export const RegistroDetUpdateWithoutAlmacenInputObjectZodSchema = makeSchema();
