import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EmpresasOrderByWithRelationInputObjectSchema as EmpresasOrderByWithRelationInputObjectSchema } from './EmpresasOrderByWithRelationInput.schema';
import { RegistroDetOrderByRelationAggregateInputObjectSchema as RegistroDetOrderByRelationAggregateInputObjectSchema } from './RegistroDetOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idAlmacen: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  interno: SortOrderSchema.optional(),
  calle: SortOrderSchema.optional(),
  numero: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ciudad: SortOrderSchema.optional(),
  provincia: SortOrderSchema.optional(),
  codigoPostal: SortOrderSchema.optional(),
  pais: SortOrderSchema.optional(),
  responsable: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  activo: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  empresa: z.lazy(() => EmpresasOrderByWithRelationInputObjectSchema).optional(),
  registrosDet: z.lazy(() => RegistroDetOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const AlmacenesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AlmacenesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesOrderByWithRelationInput>;
export const AlmacenesOrderByWithRelationInputObjectZodSchema = makeSchema();
