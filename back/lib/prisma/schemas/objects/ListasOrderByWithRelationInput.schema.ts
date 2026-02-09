import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProveedoresOrderByWithRelationInputObjectSchema as ProveedoresOrderByWithRelationInputObjectSchema } from './ProveedoresOrderByWithRelationInput.schema';
import { ListasDetOrderByRelationAggregateInputObjectSchema as ListasDetOrderByRelationAggregateInputObjectSchema } from './ListasDetOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idLista: SortOrderSchema.optional(),
  idProveedor: SortOrderSchema.optional(),
  refNo: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  observacion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  proveedor: z.lazy(() => ProveedoresOrderByWithRelationInputObjectSchema).optional(),
  detalles: z.lazy(() => ListasDetOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ListasOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ListasOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasOrderByWithRelationInput>;
export const ListasOrderByWithRelationInputObjectZodSchema = makeSchema();
