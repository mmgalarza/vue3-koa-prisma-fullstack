import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { TiposDocScalarRelationFilterObjectSchema as TiposDocScalarRelationFilterObjectSchema } from './TiposDocScalarRelationFilter.schema';
import { TiposDocWhereInputObjectSchema as TiposDocWhereInputObjectSchema } from './TiposDocWhereInput.schema';
import { VentaNullableScalarRelationFilterObjectSchema as VentaNullableScalarRelationFilterObjectSchema } from './VentaNullableScalarRelationFilter.schema';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema';
import { ActividadNullableScalarRelationFilterObjectSchema as ActividadNullableScalarRelationFilterObjectSchema } from './ActividadNullableScalarRelationFilter.schema';
import { ActividadWhereInputObjectSchema as ActividadWhereInputObjectSchema } from './ActividadWhereInput.schema';
import { RegistroDetListRelationFilterObjectSchema as RegistroDetListRelationFilterObjectSchema } from './RegistroDetListRelationFilter.schema'

const registrowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RegistroWhereInputObjectSchema), z.lazy(() => RegistroWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RegistroWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RegistroWhereInputObjectSchema), z.lazy(() => RegistroWhereInputObjectSchema).array()]).optional(),
  idRegistro: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  numero: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(20)]).optional(),
  idTipoDoc: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  idVenta: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  idActividad: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  tipoDoc: z.union([z.lazy(() => TiposDocScalarRelationFilterObjectSchema), z.lazy(() => TiposDocWhereInputObjectSchema)]).optional(),
  venta: z.union([z.lazy(() => VentaNullableScalarRelationFilterObjectSchema), z.lazy(() => VentaWhereInputObjectSchema)]).optional(),
  actividad: z.union([z.lazy(() => ActividadNullableScalarRelationFilterObjectSchema), z.lazy(() => ActividadWhereInputObjectSchema)]).optional(),
  detalles: z.lazy(() => RegistroDetListRelationFilterObjectSchema).optional()
}).strict();
export const RegistroWhereInputObjectSchema: z.ZodType<Prisma.RegistroWhereInput> = registrowhereinputSchema as unknown as z.ZodType<Prisma.RegistroWhereInput>;
export const RegistroWhereInputObjectZodSchema = registrowhereinputSchema;
