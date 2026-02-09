import * as z from 'zod';
import { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumFlujoFilterObjectSchema as EnumFlujoFilterObjectSchema } from './EnumFlujoFilter.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { RegistroScalarRelationFilterObjectSchema as RegistroScalarRelationFilterObjectSchema } from './RegistroScalarRelationFilter.schema';
import { RegistroWhereInputObjectSchema as RegistroWhereInputObjectSchema } from './RegistroWhereInput.schema';
import { ProductosScalarRelationFilterObjectSchema as ProductosScalarRelationFilterObjectSchema } from './ProductosScalarRelationFilter.schema';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema';
import { AlmacenesNullableScalarRelationFilterObjectSchema as AlmacenesNullableScalarRelationFilterObjectSchema } from './AlmacenesNullableScalarRelationFilter.schema';
import { AlmacenesWhereInputObjectSchema as AlmacenesWhereInputObjectSchema } from './AlmacenesWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const registrodetwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RegistroDetWhereInputObjectSchema), z.lazy(() => RegistroDetWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RegistroDetWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RegistroDetWhereInputObjectSchema), z.lazy(() => RegistroDetWhereInputObjectSchema).array()]).optional(),
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
})]).optional(),
  registro: z.union([z.lazy(() => RegistroScalarRelationFilterObjectSchema), z.lazy(() => RegistroWhereInputObjectSchema)]).optional(),
  producto: z.union([z.lazy(() => ProductosScalarRelationFilterObjectSchema), z.lazy(() => ProductosWhereInputObjectSchema)]).optional(),
  almacen: z.union([z.lazy(() => AlmacenesNullableScalarRelationFilterObjectSchema), z.lazy(() => AlmacenesWhereInputObjectSchema)]).optional()
}).strict();
export const RegistroDetWhereInputObjectSchema: z.ZodType<Prisma.RegistroDetWhereInput> = registrodetwhereinputSchema as unknown as z.ZodType<Prisma.RegistroDetWhereInput>;
export const RegistroDetWhereInputObjectZodSchema = registrodetwhereinputSchema;
