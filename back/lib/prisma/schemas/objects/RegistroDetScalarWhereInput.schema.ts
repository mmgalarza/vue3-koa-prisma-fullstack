import * as z from 'zod';
import { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumFlujoFilterObjectSchema as EnumFlujoFilterObjectSchema } from './EnumFlujoFilter.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const registrodetscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RegistroDetScalarWhereInputObjectSchema), z.lazy(() => RegistroDetScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RegistroDetScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RegistroDetScalarWhereInputObjectSchema), z.lazy(() => RegistroDetScalarWhereInputObjectSchema).array()]).optional(),
  idRegistroDet: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idRegistro: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idProducto: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idAlmacen: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  flujoAlmacen: z.union([z.lazy(() => EnumFlujoFilterObjectSchema), FlujoSchema]).optional(),
  cantidad: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cantidad' must be a Decimal",
})]).optional()
}).strict();
export const RegistroDetScalarWhereInputObjectSchema: z.ZodType<Prisma.RegistroDetScalarWhereInput> = registrodetscalarwhereinputSchema as unknown as z.ZodType<Prisma.RegistroDetScalarWhereInput>;
export const RegistroDetScalarWhereInputObjectZodSchema = registrodetscalarwhereinputSchema;
