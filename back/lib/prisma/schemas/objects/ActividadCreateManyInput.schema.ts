import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idActividad: z.number().int().optional(),
  idEmpresa: z.number().int().optional(),
  nombre: z.string().max(80),
  inicio: z.coerce.date().optional(),
  fin: z.coerce.date().optional(),
  estado: z.string().max(20).optional(),
  activa: z.boolean().optional()
}).strict();
export const ActividadCreateManyInputObjectSchema: z.ZodType<Prisma.ActividadCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadCreateManyInput>;
export const ActividadCreateManyInputObjectZodSchema = makeSchema();
