import * as z from 'zod';
import { RolUsuarioSchema } from '../../enums/RolUsuario.schema';
// prettier-ignore
export const UsuarioEmpresaModelSchema = z.object({
    idUsuarioEmpresa: z.number().int(),
    idUsuario: z.number().int(),
    idEmpresa: z.number().int(),
    usuario: z.unknown(),
    empresa: z.unknown(),
    rol: RolUsuarioSchema
}).strict();

export type UsuarioEmpresaPureType = z.infer<typeof UsuarioEmpresaModelSchema>;
