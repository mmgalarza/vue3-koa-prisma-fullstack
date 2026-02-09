import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVenta: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional(),
  idCliente: z.literal(true).optional(),
  idListaPvp: z.literal(true).optional()
}).strict();
export const VentaSumAggregateInputObjectSchema: z.ZodType<Prisma.VentaSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VentaSumAggregateInputType>;
export const VentaSumAggregateInputObjectZodSchema = makeSchema();
