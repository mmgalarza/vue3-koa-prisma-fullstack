import * as z from 'zod';
export const AlmacenesFindFirstResultSchema = z.nullable(z.object({
  idAlmacen: z.number().int(),
  nombre: z.string(),
  interno: z.boolean(),
  calle: z.string(),
  numero: z.string().optional(),
  ciudad: z.string(),
  provincia: z.string(),
  codigoPostal: z.string(),
  pais: z.string(),
  responsable: z.string().optional(),
  activo: z.boolean(),
  idEmpresa: z.number().int(),
  empresa: z.unknown(),
  registrosDet: z.array(z.unknown())
}));