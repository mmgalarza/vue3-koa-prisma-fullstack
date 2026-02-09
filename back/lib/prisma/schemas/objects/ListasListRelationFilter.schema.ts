import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './ListasWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ListasWhereInputObjectSchema).optional(),
  some: z.lazy(() => ListasWhereInputObjectSchema).optional(),
  none: z.lazy(() => ListasWhereInputObjectSchema).optional()
}).strict();
export const ListasListRelationFilterObjectSchema: z.ZodType<Prisma.ListasListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ListasListRelationFilter>;
export const ListasListRelationFilterObjectZodSchema = makeSchema();
