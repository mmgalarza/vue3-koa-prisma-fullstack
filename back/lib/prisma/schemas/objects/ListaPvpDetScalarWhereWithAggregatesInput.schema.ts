import * as z from 'zod';
import { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const listapvpdetscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ListaPvpDetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ListaPvpDetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ListaPvpDetScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ListaPvpDetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ListaPvpDetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idListaPvpDet: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idListaPvp: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idProducto: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  precioVenta: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precioVenta' must be a Decimal",
})]).optional()
}).strict();
export const ListaPvpDetScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ListaPvpDetScalarWhereWithAggregatesInput> = listapvpdetscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ListaPvpDetScalarWhereWithAggregatesInput>;
export const ListaPvpDetScalarWhereWithAggregatesInputObjectZodSchema = listapvpdetscalarwherewithaggregatesinputSchema;
