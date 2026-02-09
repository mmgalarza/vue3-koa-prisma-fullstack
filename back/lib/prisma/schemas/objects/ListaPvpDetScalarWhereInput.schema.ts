import * as z from 'zod';
import { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const listapvpdetscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ListaPvpDetScalarWhereInputObjectSchema), z.lazy(() => ListaPvpDetScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ListaPvpDetScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ListaPvpDetScalarWhereInputObjectSchema), z.lazy(() => ListaPvpDetScalarWhereInputObjectSchema).array()]).optional(),
  idListaPvpDet: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idListaPvp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idProducto: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  precioVenta: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precioVenta' must be a Decimal",
})]).optional()
}).strict();
export const ListaPvpDetScalarWhereInputObjectSchema: z.ZodType<Prisma.ListaPvpDetScalarWhereInput> = listapvpdetscalarwhereinputSchema as unknown as z.ZodType<Prisma.ListaPvpDetScalarWhereInput>;
export const ListaPvpDetScalarWhereInputObjectZodSchema = listapvpdetscalarwhereinputSchema;
