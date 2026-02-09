import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VentaOrderByWithRelationInputObjectSchema as VentaOrderByWithRelationInputObjectSchema } from './VentaOrderByWithRelationInput.schema';
import { ProductosOrderByWithRelationInputObjectSchema as ProductosOrderByWithRelationInputObjectSchema } from './ProductosOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  idVentaDet: SortOrderSchema.optional(),
  idVenta: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  cantidad: SortOrderSchema.optional(),
  precioUnit: SortOrderSchema.optional(),
  descuento: SortOrderSchema.optional(),
  venta: z.lazy(() => VentaOrderByWithRelationInputObjectSchema).optional(),
  producto: z.lazy(() => ProductosOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const VentaDetOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.VentaDetOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetOrderByWithRelationInput>;
export const VentaDetOrderByWithRelationInputObjectZodSchema = makeSchema();
