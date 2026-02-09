import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuariosWhereInputObjectSchema as UsuariosWhereInputObjectSchema } from './objects/UsuariosWhereInput.schema';

export const UsuariosDeleteManySchema: z.ZodType<Prisma.UsuariosDeleteManyArgs> = z.object({ where: UsuariosWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UsuariosDeleteManyArgs>;

export const UsuariosDeleteManyZodSchema = z.object({ where: UsuariosWhereInputObjectSchema.optional() }).strict();