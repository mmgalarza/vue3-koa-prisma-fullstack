import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CategoriasOrderByWithRelationInputObjectSchema as CategoriasOrderByWithRelationInputObjectSchema } from './CategoriasOrderByWithRelationInput.schema';
import { ListasDetOrderByRelationAggregateInputObjectSchema as ListasDetOrderByRelationAggregateInputObjectSchema } from './ListasDetOrderByRelationAggregateInput.schema';
import { ListaPvpDetOrderByRelationAggregateInputObjectSchema as ListaPvpDetOrderByRelationAggregateInputObjectSchema } from './ListaPvpDetOrderByRelationAggregateInput.schema';
import { VentaDetOrderByRelationAggregateInputObjectSchema as VentaDetOrderByRelationAggregateInputObjectSchema } from './VentaDetOrderByRelationAggregateInput.schema';
import { RegistroDetOrderByRelationAggregateInputObjectSchema as RegistroDetOrderByRelationAggregateInputObjectSchema } from './RegistroDetOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idProducto: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  idCategoria: SortOrderSchema.optional(),
  descripcion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  imagen: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  codigo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  unidad: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  activo: SortOrderSchema.optional(),
  categoria: z.lazy(() => CategoriasOrderByWithRelationInputObjectSchema).optional(),
  listasDet: z.lazy(() => ListasDetOrderByRelationAggregateInputObjectSchema).optional(),
  listaPvpDet: z.lazy(() => ListaPvpDetOrderByRelationAggregateInputObjectSchema).optional(),
  ventaDet: z.lazy(() => VentaDetOrderByRelationAggregateInputObjectSchema).optional(),
  registroDet: z.lazy(() => RegistroDetOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProductosOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductosOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosOrderByWithRelationInput>;
export const ProductosOrderByWithRelationInputObjectZodSchema = makeSchema();
