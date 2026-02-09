import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVenta: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional(),
  idCliente: z.literal(true).optional(),
  idListaPvp: z.literal(true).optional()
}).strict();
export const VentaAvgAggregateInputObjectSchema: z.ZodType<Prisma.VentaAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VentaAvgAggregateInputType>;
export const VentaAvgAggregateInputObjectZodSchema = makeSchema();
