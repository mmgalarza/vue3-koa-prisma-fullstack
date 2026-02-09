import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './ListaPvpWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ListaPvpWhereInputObjectSchema).optional(),
  some: z.lazy(() => ListaPvpWhereInputObjectSchema).optional(),
  none: z.lazy(() => ListaPvpWhereInputObjectSchema).optional()
}).strict();
export const ListaPvpListRelationFilterObjectSchema: z.ZodType<Prisma.ListaPvpListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpListRelationFilter>;
export const ListaPvpListRelationFilterObjectZodSchema = makeSchema();
