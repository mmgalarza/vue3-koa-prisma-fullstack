import * as z from 'zod';
import { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { EnumFlujoWithAggregatesFilterObjectSchema as EnumFlujoWithAggregatesFilterObjectSchema } from './EnumFlujoWithAggregatesFilter.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const registrodetscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RegistroDetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RegistroDetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RegistroDetScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RegistroDetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RegistroDetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idRegistroDet: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idRegistro: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idProducto: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idAlmacen: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  flujoAlmacen: z.union([z.lazy(() => EnumFlujoWithAggregatesFilterObjectSchema), FlujoSchema]).optional(),
  cantidad: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cantidad' must be a Decimal",
})]).optional()
}).strict();
export const RegistroDetScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RegistroDetScalarWhereWithAggregatesInput> = registrodetscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RegistroDetScalarWhereWithAggregatesInput>;
export const RegistroDetScalarWhereWithAggregatesInputObjectZodSchema = registrodetscalarwherewithaggregatesinputSchema;
