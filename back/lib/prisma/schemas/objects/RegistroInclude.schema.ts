import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocArgsObjectSchema as TiposDocArgsObjectSchema } from './TiposDocArgs.schema';
import { VentaArgsObjectSchema as VentaArgsObjectSchema } from './VentaArgs.schema';
import { ActividadArgsObjectSchema as ActividadArgsObjectSchema } from './ActividadArgs.schema';
import { RegistroDetFindManySchema as RegistroDetFindManySchema } from '../findManyRegistroDet.schema';
import { RegistroCountOutputTypeArgsObjectSchema as RegistroCountOutputTypeArgsObjectSchema } from './RegistroCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tipoDoc: z.union([z.boolean(), z.lazy(() => TiposDocArgsObjectSchema)]).optional(),
  venta: z.union([z.boolean(), z.lazy(() => VentaArgsObjectSchema)]).optional(),
  actividad: z.union([z.boolean(), z.lazy(() => ActividadArgsObjectSchema)]).optional(),
  detalles: z.union([z.boolean(), z.lazy(() => RegistroDetFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RegistroCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RegistroIncludeObjectSchema: z.ZodType<Prisma.RegistroInclude> = makeSchema() as unknown as z.ZodType<Prisma.RegistroInclude>;
export const RegistroIncludeObjectZodSchema = makeSchema();
