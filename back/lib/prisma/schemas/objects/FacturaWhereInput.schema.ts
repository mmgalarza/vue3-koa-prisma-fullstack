import * as z from 'zod';
import { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { VentaScalarRelationFilterObjectSchema as VentaScalarRelationFilterObjectSchema } from './VentaScalarRelationFilter.schema';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const facturawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FacturaWhereInputObjectSchema), z.lazy(() => FacturaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FacturaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FacturaWhereInputObjectSchema), z.lazy(() => FacturaWhereInputObjectSchema).array()]).optional(),
  idVenta: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  cae: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  vencCae: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  neto: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'neto' must be a Decimal",
})]).optional(),
  iva: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'iva' must be a Decimal",
})]).optional(),
  total: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'total' must be a Decimal",
})]).optional(),
  venta: z.union([z.lazy(() => VentaScalarRelationFilterObjectSchema), z.lazy(() => VentaWhereInputObjectSchema)]).optional()
}).strict();
export const FacturaWhereInputObjectSchema: z.ZodType<Prisma.FacturaWhereInput> = facturawhereinputSchema as unknown as z.ZodType<Prisma.FacturaWhereInput>;
export const FacturaWhereInputObjectZodSchema = facturawhereinputSchema;
