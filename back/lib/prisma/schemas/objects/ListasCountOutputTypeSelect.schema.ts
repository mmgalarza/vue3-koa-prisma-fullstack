import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasCountOutputTypeCountDetallesArgsObjectSchema as ListasCountOutputTypeCountDetallesArgsObjectSchema } from './ListasCountOutputTypeCountDetallesArgs.schema'

const makeSchema = () => z.object({
  detalles: z.union([z.boolean(), z.lazy(() => ListasCountOutputTypeCountDetallesArgsObjectSchema)]).optional()
}).strict();
export const ListasCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ListasCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ListasCountOutputTypeSelect>;
export const ListasCountOutputTypeSelectObjectZodSchema = makeSchema();
