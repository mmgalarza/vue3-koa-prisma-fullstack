import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { VentaOrderByWithRelationInputObjectSchema as VentaOrderByWithRelationInputObjectSchema } from './VentaOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  idVenta: SortOrderSchema.optional(),
  cae: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  vencCae: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  neto: SortOrderSchema.optional(),
  iva: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  venta: z.lazy(() => VentaOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const FacturaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FacturaOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaOrderByWithRelationInput>;
export const FacturaOrderByWithRelationInputObjectZodSchema = makeSchema();
