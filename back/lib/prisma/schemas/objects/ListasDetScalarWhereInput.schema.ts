import * as z from 'zod';
import { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const listasdetscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ListasDetScalarWhereInputObjectSchema), z.lazy(() => ListasDetScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ListasDetScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ListasDetScalarWhereInputObjectSchema), z.lazy(() => ListasDetScalarWhereInputObjectSchema).array()]).optional(),
  idListaDet: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idLista: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idProducto: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  precio: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'precio' must be a Decimal",
})]).optional(),
  descuento: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'descuento' must be a Decimal",
})]).optional()
}).strict();
export const ListasDetScalarWhereInputObjectSchema: z.ZodType<Prisma.ListasDetScalarWhereInput> = listasdetscalarwhereinputSchema as unknown as z.ZodType<Prisma.ListasDetScalarWhereInput>;
export const ListasDetScalarWhereInputObjectZodSchema = listasdetscalarwhereinputSchema;
