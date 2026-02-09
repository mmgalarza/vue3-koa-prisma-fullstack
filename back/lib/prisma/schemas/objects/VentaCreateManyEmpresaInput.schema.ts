import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVenta: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  estado: z.string().max(20),
  idCliente: z.number().int(),
  idListaPvp: z.number().int()
}).strict();
export const VentaCreateManyEmpresaInputObjectSchema: z.ZodType<Prisma.VentaCreateManyEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateManyEmpresaInput>;
export const VentaCreateManyEmpresaInputObjectZodSchema = makeSchema();
