import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idEmpresa: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  calle: SortOrderSchema.optional(),
  numero: SortOrderSchema.optional(),
  ciudad: SortOrderSchema.optional(),
  provincia: SortOrderSchema.optional(),
  codigoPostal: SortOrderSchema.optional(),
  pais: SortOrderSchema.optional(),
  contacto: SortOrderSchema.optional(),
  activo: SortOrderSchema.optional()
}).strict();
export const EmpresasCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EmpresasCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCountOrderByAggregateInput>;
export const EmpresasCountOrderByAggregateInputObjectZodSchema = makeSchema();
