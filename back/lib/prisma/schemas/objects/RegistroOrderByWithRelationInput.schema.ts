import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TiposDocOrderByWithRelationInputObjectSchema as TiposDocOrderByWithRelationInputObjectSchema } from './TiposDocOrderByWithRelationInput.schema';
import { VentaOrderByWithRelationInputObjectSchema as VentaOrderByWithRelationInputObjectSchema } from './VentaOrderByWithRelationInput.schema';
import { ActividadOrderByWithRelationInputObjectSchema as ActividadOrderByWithRelationInputObjectSchema } from './ActividadOrderByWithRelationInput.schema';
import { RegistroDetOrderByRelationAggregateInputObjectSchema as RegistroDetOrderByRelationAggregateInputObjectSchema } from './RegistroDetOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idRegistro: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  numero: SortOrderSchema.optional(),
  idTipoDoc: SortOrderSchema.optional(),
  idVenta: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  idActividad: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tipoDoc: z.lazy(() => TiposDocOrderByWithRelationInputObjectSchema).optional(),
  venta: z.lazy(() => VentaOrderByWithRelationInputObjectSchema).optional(),
  actividad: z.lazy(() => ActividadOrderByWithRelationInputObjectSchema).optional(),
  detalles: z.lazy(() => RegistroDetOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const RegistroOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RegistroOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroOrderByWithRelationInput>;
export const RegistroOrderByWithRelationInputObjectZodSchema = makeSchema();
