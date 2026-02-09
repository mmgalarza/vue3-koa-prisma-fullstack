import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCountOutputTypeCountDetallesArgsObjectSchema as VentaCountOutputTypeCountDetallesArgsObjectSchema } from './VentaCountOutputTypeCountDetallesArgs.schema';
import { VentaCountOutputTypeCountRegistrosArgsObjectSchema as VentaCountOutputTypeCountRegistrosArgsObjectSchema } from './VentaCountOutputTypeCountRegistrosArgs.schema'

const makeSchema = () => z.object({
  detalles: z.union([z.boolean(), z.lazy(() => VentaCountOutputTypeCountDetallesArgsObjectSchema)]).optional(),
  registros: z.union([z.boolean(), z.lazy(() => VentaCountOutputTypeCountRegistrosArgsObjectSchema)]).optional()
}).strict();
export const VentaCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.VentaCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.VentaCountOutputTypeSelect>;
export const VentaCountOutputTypeSelectObjectZodSchema = makeSchema();
