import * as z from 'zod';
import { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema';
import { EnumFlujoFieldUpdateOperationsInputObjectSchema as EnumFlujoFieldUpdateOperationsInputObjectSchema } from './EnumFlujoFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { ProductosUpdateOneRequiredWithoutRegistroDetNestedInputObjectSchema as ProductosUpdateOneRequiredWithoutRegistroDetNestedInputObjectSchema } from './ProductosUpdateOneRequiredWithoutRegistroDetNestedInput.schema';
import { AlmacenesUpdateOneWithoutRegistrosDetNestedInputObjectSchema as AlmacenesUpdateOneWithoutRegistrosDetNestedInputObjectSchema } from './AlmacenesUpdateOneWithoutRegistrosDetNestedInput.schema'

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
  producto: z.lazy(() => ProductosUpdateOneRequiredWithoutRegistroDetNestedInputObjectSchema).optional(),
  almacen: z.lazy(() => AlmacenesUpdateOneWithoutRegistrosDetNestedInputObjectSchema).optional()
}).strict();
export const RegistroDetUpdateWithoutRegistroInputObjectSchema: z.ZodType<Prisma.RegistroDetUpdateWithoutRegistroInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpdateWithoutRegistroInput>;
export const RegistroDetUpdateWithoutRegistroInputObjectZodSchema = makeSchema();
