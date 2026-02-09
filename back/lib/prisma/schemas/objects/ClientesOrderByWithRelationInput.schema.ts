import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EmpresasOrderByWithRelationInputObjectSchema as EmpresasOrderByWithRelationInputObjectSchema } from './EmpresasOrderByWithRelationInput.schema';
import { VentaOrderByRelationAggregateInputObjectSchema as VentaOrderByRelationAggregateInputObjectSchema } from './VentaOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idCliente: SortOrderSchema.optional(),
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
  ventas: z.lazy(() => VentaOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ClientesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ClientesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesOrderByWithRelationInput>;
export const ClientesOrderByWithRelationInputObjectZodSchema = makeSchema();
