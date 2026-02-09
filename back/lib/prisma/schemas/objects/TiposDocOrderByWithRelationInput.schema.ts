import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TalonariosOrderByWithRelationInputObjectSchema as TalonariosOrderByWithRelationInputObjectSchema } from './TalonariosOrderByWithRelationInput.schema';
import { RegistroOrderByRelationAggregateInputObjectSchema as RegistroOrderByRelationAggregateInputObjectSchema } from './RegistroOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  movAlmacen: SortOrderSchema.optional(),
  idTalon: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  talonario: z.lazy(() => TalonariosOrderByWithRelationInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TiposDocOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TiposDocOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocOrderByWithRelationInput>;
export const TiposDocOrderByWithRelationInputObjectZodSchema = makeSchema();
