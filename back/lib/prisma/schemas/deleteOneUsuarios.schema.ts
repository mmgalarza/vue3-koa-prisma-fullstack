import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuariosSelectObjectSchema as UsuariosSelectObjectSchema } from './objects/UsuariosSelect.schema';
import { UsuariosIncludeObjectSchema as UsuariosIncludeObjectSchema } from './objects/UsuariosInclude.schema';
import { UsuariosWhereUniqueInputObjectSchema as UsuariosWhereUniqueInputObjectSchema } from './objects/UsuariosWhereUniqueInput.schema';

export const UsuariosDeleteOneSchema: z.ZodType<Prisma.UsuariosDeleteArgs> = z.object({ select: UsuariosSelectObjectSchema.optional(), include: UsuariosIncludeObjectSchema.optional(), where: UsuariosWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UsuariosDeleteArgs>;

export const UsuariosDeleteOneZodSchema = z.object({ select: UsuariosSelectObjectSchema.optional(), include: UsuariosIncludeObjectSchema.optional(), where: UsuariosWhereUniqueInputObjectSchema }).strict();