import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetWhereInputObjectSchema as ListasDetWhereInputObjectSchema } from './ListasDetWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ListasDetWhereInputObjectSchema).optional(),
  some: z.lazy(() => ListasDetWhereInputObjectSchema).optional(),
  none: z.lazy(() => ListasDetWhereInputObjectSchema).optional()
}).strict();
export const ListasDetListRelationFilterObjectSchema: z.ZodType<Prisma.ListasDetListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetListRelationFilter>;
export const ListasDetListRelationFilterObjectZodSchema = makeSchema();
