import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idUsuario: z.number().int().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nombre: z.string(),
  activo: z.boolean().optional(),
  creadoEn: z.coerce.date().optional(),
  actualizadoEn: z.coerce.date().optional()
}).strict();
export const UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema: z.ZodType<Prisma.UsuariosUncheckedCreateWithoutUsuarioEmpresasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosUncheckedCreateWithoutUsuarioEmpresasInput>;
export const UsuariosUncheckedCreateWithoutUsuarioEmpresasInputObjectZodSchema = makeSchema();
