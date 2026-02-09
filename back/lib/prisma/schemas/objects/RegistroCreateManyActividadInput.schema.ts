import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idRegistro: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  numero: z.string().max(20).optional(),
  idTipoDoc: z.string(),
  idVenta: z.number().int().optional().nullable()
}).strict();
export const RegistroCreateManyActividadInputObjectSchema: z.ZodType<Prisma.RegistroCreateManyActividadInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateManyActividadInput>;
export const RegistroCreateManyActividadInputObjectZodSchema = makeSchema();
