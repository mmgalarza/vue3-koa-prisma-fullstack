import * as z from 'zod';
export const UsuarioEmpresaGroupByResultSchema = z.array(z.object({
  idUsuarioEmpresa: z.number().int(),
  idUsuario: z.number().int(),
  idEmpresa: z.number().int(),
  _count: z.object({
    idUsuarioEmpresa: z.number(),
    idUsuario: z.number(),
    idEmpresa: z.number(),
    usuario: z.number(),
    empresa: z.number(),
    rol: z.number()
  }).optional(),
  _sum: z.object({
    idUsuarioEmpresa: z.number().nullable(),
    idUsuario: z.number().nullable(),
    idEmpresa: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idUsuarioEmpresa: z.number().nullable(),
    idUsuario: z.number().nullable(),
    idEmpresa: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idUsuarioEmpresa: z.number().int().nullable(),
    idUsuario: z.number().int().nullable(),
    idEmpresa: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    idUsuarioEmpresa: z.number().int().nullable(),
    idUsuario: z.number().int().nullable(),
    idEmpresa: z.number().int().nullable()
  }).nullable().optional()
}));