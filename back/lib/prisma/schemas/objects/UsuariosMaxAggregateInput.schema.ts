import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idUsuario: z.literal(true).optional(),
  username: z.literal(true).optional(),
  email: z.literal(true).optional(),
  password: z.literal(true).optional(),
  nombre: z.literal(true).optional(),
  activo: z.literal(true).optional(),
  creadoEn: z.literal(true).optional(),
  actualizadoEn: z.literal(true).optional()
}).strict();
export const UsuariosMaxAggregateInputObjectSchema: z.ZodType<Prisma.UsuariosMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosMaxAggregateInputType>;
export const UsuariosMaxAggregateInputObjectZodSchema = makeSchema();
