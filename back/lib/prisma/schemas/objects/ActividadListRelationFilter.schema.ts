import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadWhereInputObjectSchema as ActividadWhereInputObjectSchema } from './ActividadWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ActividadWhereInputObjectSchema).optional(),
  some: z.lazy(() => ActividadWhereInputObjectSchema).optional(),
  none: z.lazy(() => ActividadWhereInputObjectSchema).optional()
}).strict();
export const ActividadListRelationFilterObjectSchema: z.ZodType<Prisma.ActividadListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ActividadListRelationFilter>;
export const ActividadListRelationFilterObjectZodSchema = makeSchema();
