import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetWhereInputObjectSchema as ListaPvpDetWhereInputObjectSchema } from './ListaPvpDetWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ListaPvpDetWhereInputObjectSchema).optional(),
  some: z.lazy(() => ListaPvpDetWhereInputObjectSchema).optional(),
  none: z.lazy(() => ListaPvpDetWhereInputObjectSchema).optional()
}).strict();
export const ListaPvpDetListRelationFilterObjectSchema: z.ZodType<Prisma.ListaPvpDetListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetListRelationFilter>;
export const ListaPvpDetListRelationFilterObjectZodSchema = makeSchema();
