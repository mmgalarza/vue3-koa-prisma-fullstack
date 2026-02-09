import * as z from 'zod';
import { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const facturascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FacturaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FacturaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FacturaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FacturaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FacturaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idVenta: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  cae: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  vencCae: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  neto: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'neto' must be a Decimal",
})]).optional(),
  iva: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'iva' must be a Decimal",
})]).optional(),
  total: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'total' must be a Decimal",
})]).optional()
}).strict();
export const FacturaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FacturaScalarWhereWithAggregatesInput> = facturascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FacturaScalarWhereWithAggregatesInput>;
export const FacturaScalarWhereWithAggregatesInputObjectZodSchema = facturascalarwherewithaggregatesinputSchema;
