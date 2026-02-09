import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresWhereInputObjectSchema as ProveedoresWhereInputObjectSchema } from './ProveedoresWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProveedoresWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProveedoresWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProveedoresWhereInputObjectSchema).optional()
}).strict();
export const ProveedoresListRelationFilterObjectSchema: z.ZodType<Prisma.ProveedoresListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresListRelationFilter>;
export const ProveedoresListRelationFilterObjectZodSchema = makeSchema();
