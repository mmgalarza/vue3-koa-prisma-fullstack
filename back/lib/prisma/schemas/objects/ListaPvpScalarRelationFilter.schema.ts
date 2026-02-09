import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './ListaPvpWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ListaPvpWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ListaPvpWhereInputObjectSchema).optional()
}).strict();
export const ListaPvpScalarRelationFilterObjectSchema: z.ZodType<Prisma.ListaPvpScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpScalarRelationFilter>;
export const ListaPvpScalarRelationFilterObjectZodSchema = makeSchema();
