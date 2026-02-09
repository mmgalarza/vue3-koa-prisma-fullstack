import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ListasOrderByWithRelationInputObjectSchema as ListasOrderByWithRelationInputObjectSchema } from './ListasOrderByWithRelationInput.schema';
import { ProductosOrderByWithRelationInputObjectSchema as ProductosOrderByWithRelationInputObjectSchema } from './ProductosOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  idListaDet: SortOrderSchema.optional(),
  idLista: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  precio: SortOrderSchema.optional(),
  descuento: SortOrderSchema.optional(),
  lista: z.lazy(() => ListasOrderByWithRelationInputObjectSchema).optional(),
  producto: z.lazy(() => ProductosOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ListasDetOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ListasDetOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetOrderByWithRelationInput>;
export const ListasDetOrderByWithRelationInputObjectZodSchema = makeSchema();
