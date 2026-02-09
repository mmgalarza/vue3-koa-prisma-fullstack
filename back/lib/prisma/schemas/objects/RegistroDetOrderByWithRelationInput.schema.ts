import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RegistroOrderByWithRelationInputObjectSchema as RegistroOrderByWithRelationInputObjectSchema } from './RegistroOrderByWithRelationInput.schema';
import { ProductosOrderByWithRelationInputObjectSchema as ProductosOrderByWithRelationInputObjectSchema } from './ProductosOrderByWithRelationInput.schema';
import { AlmacenesOrderByWithRelationInputObjectSchema as AlmacenesOrderByWithRelationInputObjectSchema } from './AlmacenesOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  idRegistroDet: SortOrderSchema.optional(),
  idRegistro: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  idAlmacen: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  flujoAlmacen: SortOrderSchema.optional(),
  cantidad: SortOrderSchema.optional(),
  registro: z.lazy(() => RegistroOrderByWithRelationInputObjectSchema).optional(),
  producto: z.lazy(() => ProductosOrderByWithRelationInputObjectSchema).optional(),
  almacen: z.lazy(() => AlmacenesOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RegistroDetOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RegistroDetOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetOrderByWithRelationInput>;
export const RegistroDetOrderByWithRelationInputObjectZodSchema = makeSchema();
