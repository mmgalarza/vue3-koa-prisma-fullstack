import * as z from 'zod';
// prettier-ignore
export const UsuariosModelSchema = z.object({
    idUsuario: z.number().int(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
    nombre: z.string(),
    activo: z.boolean(),
    creadoEn: z.date(),
    actualizadoEn: z.date(),
    UsuarioEmpresas: z.array(z.unknown())
}).strict();

export type UsuariosPureType = z.infer<typeof UsuariosModelSchema>;
