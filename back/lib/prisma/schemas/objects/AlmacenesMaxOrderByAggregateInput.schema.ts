import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idAlmacen: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  interno: SortOrderSchema.optional(),
  calle: SortOrderSchema.optional(),
  numero: SortOrderSchema.optional(),
  ciudad: SortOrderSchema.optional(),
  provincia: SortOrderSchema.optional(),
  codigoPostal: SortOrderSchema.optional(),
  pais: SortOrderSchema.optional(),
  responsable: SortOrderSchema.optional(),
  activo: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const AlmacenesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AlmacenesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesMaxOrderByAggregateInput>;
export const AlmacenesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
