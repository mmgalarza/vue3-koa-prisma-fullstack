import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasWhereInputObjectSchema as CategoriasWhereInputObjectSchema } from './CategoriasWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CategoriasWhereInputObjectSchema).optional(),
  some: z.lazy(() => CategoriasWhereInputObjectSchema).optional(),
  none: z.lazy(() => CategoriasWhereInputObjectSchema).optional()
}).strict();
export const CategoriasListRelationFilterObjectSchema: z.ZodType<Prisma.CategoriasListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasListRelationFilter>;
export const CategoriasListRelationFilterObjectZodSchema = makeSchema();
