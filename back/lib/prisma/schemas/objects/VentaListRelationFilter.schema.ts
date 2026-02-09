import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => VentaWhereInputObjectSchema).optional(),
  some: z.lazy(() => VentaWhereInputObjectSchema).optional(),
  none: z.lazy(() => VentaWhereInputObjectSchema).optional()
}).strict();
export const VentaListRelationFilterObjectSchema: z.ZodType<Prisma.VentaListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VentaListRelationFilter>;
export const VentaListRelationFilterObjectZodSchema = makeSchema();
