import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaArgsObjectSchema as VentaArgsObjectSchema } from './VentaArgs.schema'

const makeSchema = () => z.object({
  idVenta: z.boolean().optional(),
  cae: z.boolean().optional(),
  vencCae: z.boolean().optional(),
  neto: z.boolean().optional(),
  iva: z.boolean().optional(),
  total: z.boolean().optional(),
  venta: z.union([z.boolean(), z.lazy(() => VentaArgsObjectSchema)]).optional()
}).strict();
export const FacturaSelectObjectSchema: z.ZodType<Prisma.FacturaSelect> = makeSchema() as unknown as z.ZodType<Prisma.FacturaSelect>;
export const FacturaSelectObjectZodSchema = makeSchema();
