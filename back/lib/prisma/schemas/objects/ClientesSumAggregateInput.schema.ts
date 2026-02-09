import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idCliente: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const ClientesSumAggregateInputObjectSchema: z.ZodType<Prisma.ClientesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientesSumAggregateInputType>;
export const ClientesSumAggregateInputObjectZodSchema = makeSchema();
