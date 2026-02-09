import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idUsuario: z.number().int().optional(),
  username: z.string().max(50),
  email: z.string().max(100),
  password: z.string().max(255),
  nombre: z.string().max(80),
  activo: z.boolean().optional(),
  creadoEn: z.coerce.date().optional(),
  actualizadoEn: z.coerce.date().optional()
}).strict();
export const UsuariosCreateManyInputObjectSchema: z.ZodType<Prisma.UsuariosCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosCreateManyInput>;
export const UsuariosCreateManyInputObjectZodSchema = makeSchema();
