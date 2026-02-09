import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idRegistro: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  numero: z.string().max(20).optional(),
  idVenta: z.number().int().optional().nullable(),
  idActividad: z.number().int().optional().nullable()
}).strict();
export const RegistroCreateManyTipoDocInputObjectSchema: z.ZodType<Prisma.RegistroCreateManyTipoDocInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateManyTipoDocInput>;
export const RegistroCreateManyTipoDocInputObjectZodSchema = makeSchema();
