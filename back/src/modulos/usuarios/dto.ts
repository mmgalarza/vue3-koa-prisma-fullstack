import { z } from "zod";

/* =======================
   Usuarios
======================= */
export const CrearUsuarioSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  nombre: z.string().min(1),
  activo: z.boolean().optional(),
});
export const ActualizarUsuarioSchema = CrearUsuarioSchema.partial();
export const ListarUsuariosSchema = z.object({
  skip: z.number().min(0).optional(),   
  take: z.number().min(1).max(100).optional(),
  activo: z.boolean().optional(),       
  search: z.string().optional(),       
});
export type ListarUsuariosDto = z.infer<typeof ListarUsuariosSchema>;
export type CrearUsuarioDto = z.infer<typeof CrearUsuarioSchema>;
export type ActualizarUsuarioDto = z.infer<typeof ActualizarUsuarioSchema>;