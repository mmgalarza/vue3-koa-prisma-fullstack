import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaArgsObjectSchema as VentaArgsObjectSchema } from './VentaArgs.schema';
import { ProductosArgsObjectSchema as ProductosArgsObjectSchema } from './ProductosArgs.schema'

const makeSchema = () => z.object({
  idVentaDet: z.boolean().optional(),
  idVenta: z.boolean().optional(),
  idProducto: z.boolean().optional(),
  cantidad: z.boolean().optional(),
  precioUnit: z.boolean().optional(),
  descuento: z.boolean().optional(),
  venta: z.union([z.boolean(), z.lazy(() => VentaArgsObjectSchema)]).optional(),
  producto: z.union([z.boolean(), z.lazy(() => ProductosArgsObjectSchema)]).optional()
}).strict();
export const VentaDetSelectObjectSchema: z.ZodType<Prisma.VentaDetSelect> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetSelect>;
export const VentaDetSelectObjectZodSchema = makeSchema();
