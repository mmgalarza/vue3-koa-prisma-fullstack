import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadWhereInputObjectSchema as ActividadWhereInputObjectSchema } from './ActividadWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ActividadWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ActividadWhereInputObjectSchema).optional().nullable()
}).strict();
export const ActividadNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ActividadNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ActividadNullableScalarRelationFilter>;
export const ActividadNullableScalarRelationFilterObjectZodSchema = makeSchema();
