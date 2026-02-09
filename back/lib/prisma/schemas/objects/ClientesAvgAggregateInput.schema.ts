import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idCliente: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const ClientesAvgAggregateInputObjectSchema: z.ZodType<Prisma.ClientesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientesAvgAggregateInputType>;
export const ClientesAvgAggregateInputObjectZodSchema = makeSchema();
