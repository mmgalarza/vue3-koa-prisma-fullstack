import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuariosSelectObjectSchema as UsuariosSelectObjectSchema } from './objects/UsuariosSelect.schema';
import { UsuariosUpdateManyMutationInputObjectSchema as UsuariosUpdateManyMutationInputObjectSchema } from './objects/UsuariosUpdateManyMutationInput.schema';
import { UsuariosWhereInputObjectSchema as UsuariosWhereInputObjectSchema } from './objects/UsuariosWhereInput.schema';

export const UsuariosUpdateManyAndReturnSchema: z.ZodType<Prisma.UsuariosUpdateManyAndReturnArgs> = z.object({ select: UsuariosSelectObjectSchema.optional(), data: UsuariosUpdateManyMutationInputObjectSchema, where: UsuariosWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UsuariosUpdateManyAndReturnArgs>;

export const UsuariosUpdateManyAndReturnZodSchema = z.object({ select: UsuariosSelectObjectSchema.optional(), data: UsuariosUpdateManyMutationInputObjectSchema, where: UsuariosWhereInputObjectSchema.optional() }).strict();