import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesCountOutputTypeCountRegistrosDetArgsObjectSchema as AlmacenesCountOutputTypeCountRegistrosDetArgsObjectSchema } from './AlmacenesCountOutputTypeCountRegistrosDetArgs.schema'

const makeSchema = () => z.object({
  registrosDet: z.union([z.boolean(), z.lazy(() => AlmacenesCountOutputTypeCountRegistrosDetArgsObjectSchema)]).optional()
}).strict();
export const AlmacenesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AlmacenesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesCountOutputTypeSelect>;
export const AlmacenesCountOutputTypeSelectObjectZodSchema = makeSchema();
