import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadCountOutputTypeCountRegistrosArgsObjectSchema as ActividadCountOutputTypeCountRegistrosArgsObjectSchema } from './ActividadCountOutputTypeCountRegistrosArgs.schema'

const makeSchema = () => z.object({
  registros: z.union([z.boolean(), z.lazy(() => ActividadCountOutputTypeCountRegistrosArgsObjectSchema)]).optional()
}).strict();
export const ActividadCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ActividadCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ActividadCountOutputTypeSelect>;
export const ActividadCountOutputTypeSelectObjectZodSchema = makeSchema();
