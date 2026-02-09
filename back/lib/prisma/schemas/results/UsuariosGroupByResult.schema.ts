import * as z from 'zod';
export const UsuariosGroupByResultSchema = z.array(z.object({
  idUsuario: z.number().int(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nombre: z.string(),
  activo: z.boolean(),
  creadoEn: z.date(),
  actualizadoEn: z.date(),
  _count: z.object({
    idUsuario: z.number(),
    username: z.number(),
    email: z.number(),
    password: z.number(),
    nombre: z.number(),
    activo: z.number(),
    creadoEn: z.number(),
    actualizadoEn: z.number(),
    UsuarioEmpresas: z.number()
  }).optional(),
  _sum: z.object({
    idUsuario: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idUsuario: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idUsuario: z.number().int().nullable(),
    username: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    nombre: z.string().nullable(),
    creadoEn: z.date().nullable(),
    actualizadoEn: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    idUsuario: z.number().int().nullable(),
    username: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    nombre: z.string().nullable(),
    creadoEn: z.date().nullable(),
    actualizadoEn: z.date().nullable()
  }).nullable().optional()
}));