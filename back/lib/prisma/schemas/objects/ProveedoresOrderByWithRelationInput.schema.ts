import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EmpresasOrderByWithRelationInputObjectSchema as EmpresasOrderByWithRelationInputObjectSchema } from './EmpresasOrderByWithRelationInput.schema';
import { ListasOrderByRelationAggregateInputObjectSchema as ListasOrderByRelationAggregateInputObjectSchema } from './ListasOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idProveedor: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  calle: SortOrderSchema.optional(),
  numero: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ciudad: SortOrderSchema.optional(),
  provincia: SortOrderSchema.optional(),
  codigoPostal: SortOrderSchema.optional(),
  pais: SortOrderSchema.optional(),
  contacto: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  activo: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  empresa: z.lazy(() => EmpresasOrderByWithRelationInputObjectSchema).optional(),
  listas: z.lazy(() => ListasOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProveedoresOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProveedoresOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresOrderByWithRelationInput>;
export const ProveedoresOrderByWithRelationInputObjectZodSchema = makeSchema();
