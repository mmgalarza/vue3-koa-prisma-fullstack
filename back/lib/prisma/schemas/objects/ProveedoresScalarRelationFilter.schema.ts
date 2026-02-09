import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresWhereInputObjectSchema as ProveedoresWhereInputObjectSchema } from './ProveedoresWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ProveedoresWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ProveedoresWhereInputObjectSchema).optional()
}).strict();
export const ProveedoresScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProveedoresScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresScalarRelationFilter>;
export const ProveedoresScalarRelationFilterObjectZodSchema = makeSchema();
