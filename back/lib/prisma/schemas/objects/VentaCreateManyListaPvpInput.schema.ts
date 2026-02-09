import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVenta: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  estado: z.string().max(20),
  idEmpresa: z.number().int(),
  idCliente: z.number().int()
}).strict();
export const VentaCreateManyListaPvpInputObjectSchema: z.ZodType<Prisma.VentaCreateManyListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateManyListaPvpInput>;
export const VentaCreateManyListaPvpInputObjectZodSchema = makeSchema();
