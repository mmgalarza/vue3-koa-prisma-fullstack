import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesCountOutputTypeCountVentasArgsObjectSchema as ClientesCountOutputTypeCountVentasArgsObjectSchema } from './ClientesCountOutputTypeCountVentasArgs.schema'

const makeSchema = () => z.object({
  ventas: z.union([z.boolean(), z.lazy(() => ClientesCountOutputTypeCountVentasArgsObjectSchema)]).optional()
}).strict();
export const ClientesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ClientesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientesCountOutputTypeSelect>;
export const ClientesCountOutputTypeSelectObjectZodSchema = makeSchema();
