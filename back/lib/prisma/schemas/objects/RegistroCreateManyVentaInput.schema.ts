import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idRegistro: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  numero: z.string().max(20).optional(),
  idTipoDoc: z.string(),
  idActividad: z.number().int().optional().nullable()
}).strict();
export const RegistroCreateManyVentaInputObjectSchema: z.ZodType<Prisma.RegistroCreateManyVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateManyVentaInput>;
export const RegistroCreateManyVentaInputObjectZodSchema = makeSchema();
