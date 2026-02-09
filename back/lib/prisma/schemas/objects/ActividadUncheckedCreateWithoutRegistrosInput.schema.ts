import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idActividad: z.number().int().optional(),
  idEmpresa: z.number().int().optional(),
  nombre: z.string(),
  inicio: z.coerce.date().optional(),
  fin: z.coerce.date().optional(),
  estado: z.string().optional(),
  activa: z.boolean().optional()
}).strict();
export const ActividadUncheckedCreateWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.ActividadUncheckedCreateWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadUncheckedCreateWithoutRegistrosInput>;
export const ActividadUncheckedCreateWithoutRegistrosInputObjectZodSchema = makeSchema();
