import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './ListasWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ListasWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ListasWhereInputObjectSchema).optional()
}).strict();
export const ListasScalarRelationFilterObjectSchema: z.ZodType<Prisma.ListasScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ListasScalarRelationFilter>;
export const ListasScalarRelationFilterObjectZodSchema = makeSchema();
