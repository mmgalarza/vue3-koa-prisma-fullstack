import * as z from 'zod';
export const TiposDocFindUniqueResultSchema = z.nullable(z.object({
  idTipoDoc: z.string(),
  nombre: z.string(),
  movAlmacen: z.unknown(),
  idTalon: z.number().int().optional(),
  talonario: z.unknown().optional(),
  registros: z.array(z.unknown())
}));