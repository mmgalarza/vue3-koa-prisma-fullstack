import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocArgsObjectSchema as TiposDocArgsObjectSchema } from './TiposDocArgs.schema';
import { VentaArgsObjectSchema as VentaArgsObjectSchema } from './VentaArgs.schema';
import { ActividadArgsObjectSchema as ActividadArgsObjectSchema } from './ActividadArgs.schema';
import { RegistroDetFindManySchema as RegistroDetFindManySchema } from '../findManyRegistroDet.schema';
import { RegistroCountOutputTypeArgsObjectSchema as RegistroCountOutputTypeArgsObjectSchema } from './RegistroCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idRegistro: z.boolean().optional(),
  fecha: z.boolean().optional(),
  numero: z.boolean().optional(),
  idTipoDoc: z.boolean().optional(),
  idVenta: z.boolean().optional(),
  idActividad: z.boolean().optional(),
  tipoDoc: z.union([z.boolean(), z.lazy(() => TiposDocArgsObjectSchema)]).optional(),
  venta: z.union([z.boolean(), z.lazy(() => VentaArgsObjectSchema)]).optional(),
  actividad: z.union([z.boolean(), z.lazy(() => ActividadArgsObjectSchema)]).optional(),
  detalles: z.union([z.boolean(), z.lazy(() => RegistroDetFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RegistroCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RegistroSelectObjectSchema: z.ZodType<Prisma.RegistroSelect> = makeSchema() as unknown as z.ZodType<Prisma.RegistroSelect>;
export const RegistroSelectObjectZodSchema = makeSchema();
