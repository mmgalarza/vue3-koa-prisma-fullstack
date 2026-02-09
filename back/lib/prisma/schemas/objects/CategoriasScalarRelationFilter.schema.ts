import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasWhereInputObjectSchema as CategoriasWhereInputObjectSchema } from './CategoriasWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CategoriasWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CategoriasWhereInputObjectSchema).optional()
}).strict();
export const CategoriasScalarRelationFilterObjectSchema: z.ZodType<Prisma.CategoriasScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasScalarRelationFilter>;
export const CategoriasScalarRelationFilterObjectZodSchema = makeSchema();
