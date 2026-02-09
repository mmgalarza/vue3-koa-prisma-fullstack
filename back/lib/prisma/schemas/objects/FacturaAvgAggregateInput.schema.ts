import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVenta: z.literal(true).optional(),
  neto: z.literal(true).optional(),
  iva: z.literal(true).optional(),
  total: z.literal(true).optional()
}).strict();
export const FacturaAvgAggregateInputObjectSchema: z.ZodType<Prisma.FacturaAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FacturaAvgAggregateInputType>;
export const FacturaAvgAggregateInputObjectZodSchema = makeSchema();
