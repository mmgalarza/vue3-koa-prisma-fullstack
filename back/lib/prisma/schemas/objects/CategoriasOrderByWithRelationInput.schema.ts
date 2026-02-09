import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EmpresasOrderByWithRelationInputObjectSchema as EmpresasOrderByWithRelationInputObjectSchema } from './EmpresasOrderByWithRelationInput.schema';
import { ProductosOrderByRelationAggregateInputObjectSchema as ProductosOrderByRelationAggregateInputObjectSchema } from './ProductosOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idCategoria: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  descripcion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  icono: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  activo: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  empresa: z.lazy(() => EmpresasOrderByWithRelationInputObjectSchema).optional(),
  productos: z.lazy(() => ProductosOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CategoriasOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CategoriasOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasOrderByWithRelationInput>;
export const CategoriasOrderByWithRelationInputObjectZodSchema = makeSchema();
