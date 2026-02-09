import * as z from 'zod';
import { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const listasdetscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ListasDetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ListasDetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ListasDetScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ListasDetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ListasDetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idListaDet: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idLista: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idProducto: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  precio: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precio' must be a Decimal",
})]).optional(),
  descuento: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'descuento' must be a Decimal",
})]).optional()
}).strict();
export const ListasDetScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ListasDetScalarWhereWithAggregatesInput> = listasdetscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ListasDetScalarWhereWithAggregatesInput>;
export const ListasDetScalarWhereWithAggregatesInputObjectZodSchema = listasdetscalarwherewithaggregatesinputSchema;
