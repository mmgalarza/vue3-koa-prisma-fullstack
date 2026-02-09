import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => VentaWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => VentaWhereInputObjectSchema).optional().nullable()
}).strict();
export const VentaNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.VentaNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VentaNullableScalarRelationFilter>;
export const VentaNullableScalarRelationFilterObjectZodSchema = makeSchema();
