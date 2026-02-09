import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idCliente: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  calle: SortOrderSchema.optional(),
  numero: SortOrderSchema.optional(),
  ciudad: SortOrderSchema.optional(),
  provincia: SortOrderSchema.optional(),
  codigoPostal: SortOrderSchema.optional(),
  pais: SortOrderSchema.optional(),
  contacto: SortOrderSchema.optional(),
  activo: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const ClientesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesMinOrderByAggregateInput>;
export const ClientesMinOrderByAggregateInputObjectZodSchema = makeSchema();
