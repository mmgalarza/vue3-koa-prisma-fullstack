import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVenta: z.literal(true).optional(),
  fecha: z.literal(true).optional(),
  estado: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional(),
  idCliente: z.literal(true).optional(),
  idListaPvp: z.literal(true).optional()
}).strict();
export const VentaMinAggregateInputObjectSchema: z.ZodType<Prisma.VentaMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VentaMinAggregateInputType>;
export const VentaMinAggregateInputObjectZodSchema = makeSchema();
