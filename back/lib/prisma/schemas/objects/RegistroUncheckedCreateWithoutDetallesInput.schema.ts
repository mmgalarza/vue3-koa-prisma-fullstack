import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idRegistro: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  numero: z.string().optional(),
  idTipoDoc: z.string(),
  idVenta: z.number().int().optional().nullable(),
  idActividad: z.number().int().optional().nullable()
}).strict();
export const RegistroUncheckedCreateWithoutDetallesInputObjectSchema: z.ZodType<Prisma.RegistroUncheckedCreateWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUncheckedCreateWithoutDetallesInput>;
export const RegistroUncheckedCreateWithoutDetallesInputObjectZodSchema = makeSchema();
