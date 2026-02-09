import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetWhereInputObjectSchema as VentaDetWhereInputObjectSchema } from './VentaDetWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => VentaDetWhereInputObjectSchema).optional(),
  some: z.lazy(() => VentaDetWhereInputObjectSchema).optional(),
  none: z.lazy(() => VentaDetWhereInputObjectSchema).optional()
}).strict();
export const VentaDetListRelationFilterObjectSchema: z.ZodType<Prisma.VentaDetListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetListRelationFilter>;
export const VentaDetListRelationFilterObjectZodSchema = makeSchema();
