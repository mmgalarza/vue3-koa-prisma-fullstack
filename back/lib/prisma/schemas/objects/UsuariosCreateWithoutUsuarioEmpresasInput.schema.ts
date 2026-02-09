import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  username: z.string().max(50),
  email: z.string().max(100),
  password: z.string().max(255),
  nombre: z.string().max(80),
  activo: z.boolean().optional(),
  creadoEn: z.coerce.date().optional(),
  actualizadoEn: z.coerce.date().optional()
}).strict();
export const UsuariosCreateWithoutUsuarioEmpresasInputObjectSchema: z.ZodType<Prisma.UsuariosCreateWithoutUsuarioEmpresasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosCreateWithoutUsuarioEmpresasInput>;
export const UsuariosCreateWithoutUsuarioEmpresasInputObjectZodSchema = makeSchema();
