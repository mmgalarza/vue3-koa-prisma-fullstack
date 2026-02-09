import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EmpresasOrderByWithRelationInputObjectSchema as EmpresasOrderByWithRelationInputObjectSchema } from './EmpresasOrderByWithRelationInput.schema';
import { ListaPvpDetOrderByRelationAggregateInputObjectSchema as ListaPvpDetOrderByRelationAggregateInputObjectSchema } from './ListaPvpDetOrderByRelationAggregateInput.schema';
import { VentaOrderByRelationAggregateInputObjectSchema as VentaOrderByRelationAggregateInputObjectSchema } from './VentaOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idListaPvp: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  criterio: SortOrderSchema.optional(),
  fechaGen: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  empresa: z.lazy(() => EmpresasOrderByWithRelationInputObjectSchema).optional(),
  detalles: z.lazy(() => ListaPvpDetOrderByRelationAggregateInputObjectSchema).optional(),
  ventas: z.lazy(() => VentaOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ListaPvpOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ListaPvpOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpOrderByWithRelationInput>;
export const ListaPvpOrderByWithRelationInputObjectZodSchema = makeSchema();
