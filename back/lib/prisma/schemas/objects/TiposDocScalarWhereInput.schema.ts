import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumFlujoFilterObjectSchema as EnumFlujoFilterObjectSchema } from './EnumFlujoFilter.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const tiposdocscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TiposDocScalarWhereInputObjectSchema), z.lazy(() => TiposDocScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TiposDocScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TiposDocScalarWhereInputObjectSchema), z.lazy(() => TiposDocScalarWhereInputObjectSchema).array()]).optional(),
  idTipoDoc: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  movAlmacen: z.union([z.lazy(() => EnumFlujoFilterObjectSchema), FlujoSchema]).optional(),
  idTalon: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const TiposDocScalarWhereInputObjectSchema: z.ZodType<Prisma.TiposDocScalarWhereInput> = tiposdocscalarwhereinputSchema as unknown as z.ZodType<Prisma.TiposDocScalarWhereInput>;
export const TiposDocScalarWhereInputObjectZodSchema = tiposdocscalarwhereinputSchema;
