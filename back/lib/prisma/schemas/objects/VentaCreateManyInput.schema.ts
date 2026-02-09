import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVenta: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  estado: z.string().max(20),
  idEmpresa: z.number().int(),
  idCliente: z.number().int(),
  idListaPvp: z.number().int()
}).strict();
export const VentaCreateManyInputObjectSchema: z.ZodType<Prisma.VentaCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateManyInput>;
export const VentaCreateManyInputObjectZodSchema = makeSchema();
