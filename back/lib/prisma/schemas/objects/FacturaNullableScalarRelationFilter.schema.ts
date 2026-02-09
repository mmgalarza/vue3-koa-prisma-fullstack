import * as z from 'zod';
import type { Prisma } from '../../client';
import { FacturaWhereInputObjectSchema as FacturaWhereInputObjectSchema } from './FacturaWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => FacturaWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => FacturaWhereInputObjectSchema).optional().nullable()
}).strict();
export const FacturaNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.FacturaNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FacturaNullableScalarRelationFilter>;
export const FacturaNullableScalarRelationFilterObjectZodSchema = makeSchema();
