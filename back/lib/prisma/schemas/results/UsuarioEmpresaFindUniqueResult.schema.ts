import * as z from 'zod';
export const UsuarioEmpresaFindUniqueResultSchema = z.nullable(z.object({
  idUsuarioEmpresa: z.number().int(),
  idUsuario: z.number().int(),
  idEmpresa: z.number().int(),
  usuario: z.unknown(),
  empresa: z.unknown(),
  rol: z.unknown()
}));