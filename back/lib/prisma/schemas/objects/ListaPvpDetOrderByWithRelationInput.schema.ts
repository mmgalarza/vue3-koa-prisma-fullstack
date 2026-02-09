import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ListaPvpOrderByWithRelationInputObjectSchema as ListaPvpOrderByWithRelationInputObjectSchema } from './ListaPvpOrderByWithRelationInput.schema';
import { ProductosOrderByWithRelationInputObjectSchema as ProductosOrderByWithRelationInputObjectSchema } from './ProductosOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  idListaPvpDet: SortOrderSchema.optional(),
  idListaPvp: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  precioVenta: SortOrderSchema.optional(),
  listaPvp: z.lazy(() => ListaPvpOrderByWithRelationInputObjectSchema).optional(),
  producto: z.lazy(() => ProductosOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ListaPvpDetOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ListaPvpDetOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetOrderByWithRelationInput>;
export const ListaPvpDetOrderByWithRelationInputObjectZodSchema = makeSchema();
