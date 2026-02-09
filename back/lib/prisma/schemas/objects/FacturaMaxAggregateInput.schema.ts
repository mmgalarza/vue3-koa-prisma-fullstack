import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVenta: z.literal(true).optional(),
  cae: z.literal(true).optional(),
  vencCae: z.literal(true).optional(),
  neto: z.literal(true).optional(),
  iva: z.literal(true).optional(),
  total: z.literal(true).optional()
}).strict();
export const FacturaMaxAggregateInputObjectSchema: z.ZodType<Prisma.FacturaMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FacturaMaxAggregateInputType>;
export const FacturaMaxAggregateInputObjectZodSchema = makeSchema();
