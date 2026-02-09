import * as z from 'zod';
export const ListaPvpDeleteResultSchema = z.nullable(z.object({
  idListaPvp: z.number().int(),
  nombre: z.string(),
  criterio: z.unknown(),
  fechaGen: z.date(),
  idEmpresa: z.number().int(),
  empresa: z.unknown(),
  detalles: z.array(z.unknown()),
  ventas: z.array(z.unknown())
}));