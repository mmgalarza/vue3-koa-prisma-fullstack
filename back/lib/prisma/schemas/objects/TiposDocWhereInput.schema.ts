import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumFlujoFilterObjectSchema as EnumFlujoFilterObjectSchema } from './EnumFlujoFilter.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { TalonariosNullableScalarRelationFilterObjectSchema as TalonariosNullableScalarRelationFilterObjectSchema } from './TalonariosNullableScalarRelationFilter.schema';
import { TalonariosWhereInputObjectSchema as TalonariosWhereInputObjectSchema } from './TalonariosWhereInput.schema';
import { RegistroListRelationFilterObjectSchema as RegistroListRelationFilterObjectSchema } from './RegistroListRelationFilter.schema'

const tiposdocwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TiposDocWhereInputObjectSchema), z.lazy(() => TiposDocWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TiposDocWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TiposDocWhereInputObjectSchema), z.lazy(() => TiposDocWhereInputObjectSchema).array()]).optional(),
  idTipoDoc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(3)]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(80)]).optional(),
  movAlmacen: z.union([z.lazy(() => EnumFlujoFilterObjectSchema), FlujoSchema]).optional(),
  idTalon: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  talonario: z.union([z.lazy(() => TalonariosNullableScalarRelationFilterObjectSchema), z.lazy(() => TalonariosWhereInputObjectSchema)]).optional(),
  registros: z.lazy(() => RegistroListRelationFilterObjectSchema).optional()
}).strict();
export const TiposDocWhereInputObjectSchema: z.ZodType<Prisma.TiposDocWhereInput> = tiposdocwhereinputSchema as unknown as z.ZodType<Prisma.TiposDocWhereInput>;
export const TiposDocWhereInputObjectZodSchema = tiposdocwhereinputSchema;
