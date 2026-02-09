import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaArgsObjectSchema as VentaArgsObjectSchema } from './VentaArgs.schema';
import { ProductosArgsObjectSchema as ProductosArgsObjectSchema } from './ProductosArgs.schema'

const makeSchema = () => z.object({
  venta: z.union([z.boolean(), z.lazy(() => VentaArgsObjectSchema)]).optional(),
  producto: z.union([z.boolean(), z.lazy(() => ProductosArgsObjectSchema)]).optional()
}).strict();
export const VentaDetIncludeObjectSchema: z.ZodType<Prisma.VentaDetInclude> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetInclude>;
export const VentaDetIncludeObjectZodSchema = makeSchema();
