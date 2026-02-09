import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVenta: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  estado: z.string().max(20),
  idEmpresa: z.number().int(),
  idListaPvp: z.number().int()
}).strict();
export const VentaCreateManyClienteInputObjectSchema: z.ZodType<Prisma.VentaCreateManyClienteInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateManyClienteInput>;
export const VentaCreateManyClienteInputObjectZodSchema = makeSchema();
