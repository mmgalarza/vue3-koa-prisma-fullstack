import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCountOutputTypeCountDetallesArgsObjectSchema as RegistroCountOutputTypeCountDetallesArgsObjectSchema } from './RegistroCountOutputTypeCountDetallesArgs.schema'

const makeSchema = () => z.object({
  detalles: z.union([z.boolean(), z.lazy(() => RegistroCountOutputTypeCountDetallesArgsObjectSchema)]).optional()
}).strict();
export const RegistroCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.RegistroCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCountOutputTypeSelect>;
export const RegistroCountOutputTypeSelectObjectZodSchema = makeSchema();
