import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuariosUpdateManyMutationInputObjectSchema as UsuariosUpdateManyMutationInputObjectSchema } from './objects/UsuariosUpdateManyMutationInput.schema';
import { UsuariosWhereInputObjectSchema as UsuariosWhereInputObjectSchema } from './objects/UsuariosWhereInput.schema';

export const UsuariosUpdateManySchema: z.ZodType<Prisma.UsuariosUpdateManyArgs> = z.object({ data: UsuariosUpdateManyMutationInputObjectSchema, where: UsuariosWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UsuariosUpdateManyArgs>;

export const UsuariosUpdateManyZodSchema = z.object({ data: UsuariosUpdateManyMutationInputObjectSchema, where: UsuariosWhereInputObjectSchema.optional() }).strict();