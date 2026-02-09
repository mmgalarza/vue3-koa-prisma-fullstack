import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpCountOutputTypeCountDetallesArgsObjectSchema as ListaPvpCountOutputTypeCountDetallesArgsObjectSchema } from './ListaPvpCountOutputTypeCountDetallesArgs.schema';
import { ListaPvpCountOutputTypeCountVentasArgsObjectSchema as ListaPvpCountOutputTypeCountVentasArgsObjectSchema } from './ListaPvpCountOutputTypeCountVentasArgs.schema'

const makeSchema = () => z.object({
  detalles: z.union([z.boolean(), z.lazy(() => ListaPvpCountOutputTypeCountDetallesArgsObjectSchema)]).optional(),
  ventas: z.union([z.boolean(), z.lazy(() => ListaPvpCountOutputTypeCountVentasArgsObjectSchema)]).optional()
}).strict();
export const ListaPvpCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ListaPvpCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCountOutputTypeSelect>;
export const ListaPvpCountOutputTypeSelectObjectZodSchema = makeSchema();
