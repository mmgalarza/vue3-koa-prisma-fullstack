import * as z from 'zod';
export const CategoriasUpsertResultSchema = z.object({
  idCategoria: z.number().int(),
  nombre: z.string(),
  descripcion: z.string().optional(),
  icono: z.string().optional(),
  activo: z.boolean(),
  idEmpresa: z.number().int(),
  empresa: z.unknown(),
  productos: z.array(z.unknown())
});