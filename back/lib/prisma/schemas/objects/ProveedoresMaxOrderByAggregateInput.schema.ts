import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idProveedor: SortOrderSchema.optional(),
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
export const ProveedoresMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProveedoresMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresMaxOrderByAggregateInput>;
export const ProveedoresMaxOrderByAggregateInputObjectZodSchema = makeSchema();
