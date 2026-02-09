import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EmpresasOrderByWithRelationInputObjectSchema as EmpresasOrderByWithRelationInputObjectSchema } from './EmpresasOrderByWithRelationInput.schema';
import { RegistroOrderByRelationAggregateInputObjectSchema as RegistroOrderByRelationAggregateInputObjectSchema } from './RegistroOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idActividad: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  inicio: SortOrderSchema.optional(),
  fin: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  activa: SortOrderSchema.optional(),
  empresa: z.lazy(() => EmpresasOrderByWithRelationInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ActividadOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ActividadOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadOrderByWithRelationInput>;
export const ActividadOrderByWithRelationInputObjectZodSchema = makeSchema();
