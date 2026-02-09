import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaArgsObjectSchema as VentaArgsObjectSchema } from './VentaArgs.schema'

const makeSchema = () => z.object({
  venta: z.union([z.boolean(), z.lazy(() => VentaArgsObjectSchema)]).optional()
}).strict();
export const FacturaIncludeObjectSchema: z.ZodType<Prisma.FacturaInclude> = makeSchema() as unknown as z.ZodType<Prisma.FacturaInclude>;
export const FacturaIncludeObjectZodSchema = makeSchema();
