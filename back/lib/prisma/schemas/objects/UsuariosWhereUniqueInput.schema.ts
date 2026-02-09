import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idUsuario: z.number().int().optional(),
  username: z.string().max(50).optional(),
  email: z.string().max(100).optional()
}).strict();
export const UsuariosWhereUniqueInputObjectSchema: z.ZodType<Prisma.UsuariosWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosWhereUniqueInput>;
export const UsuariosWhereUniqueInputObjectZodSchema = makeSchema();
