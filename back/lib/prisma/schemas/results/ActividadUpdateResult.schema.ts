import * as z from 'zod';
export const ActividadUpdateResultSchema = z.nullable(z.object({
  idActividad: z.number().int(),
  idEmpresa: z.number().int(),
  nombre: z.string(),
  inicio: z.date(),
  fin: z.date(),
  estado: z.string(),
  activa: z.boolean(),
  empresa: z.unknown(),
  registros: z.array(z.unknown())
}));