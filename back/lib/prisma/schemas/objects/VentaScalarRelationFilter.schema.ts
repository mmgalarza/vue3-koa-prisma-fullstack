import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => VentaWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => VentaWhereInputObjectSchema).optional()
}).strict();
export const VentaScalarRelationFilterObjectSchema: z.ZodType<Prisma.VentaScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VentaScalarRelationFilter>;
export const VentaScalarRelationFilterObjectZodSchema = makeSchema();
