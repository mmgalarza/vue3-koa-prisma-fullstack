import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuariosSelectObjectSchema as UsuariosSelectObjectSchema } from './objects/UsuariosSelect.schema';
import { UsuariosIncludeObjectSchema as UsuariosIncludeObjectSchema } from './objects/UsuariosInclude.schema';
import { UsuariosWhereUniqueInputObjectSchema as UsuariosWhereUniqueInputObjectSchema } from './objects/UsuariosWhereUniqueInput.schema';

export const UsuariosFindUniqueOrThrowSchema: z.ZodType<Prisma.UsuariosFindUniqueOrThrowArgs> = z.object({ select: UsuariosSelectObjectSchema.optional(), include: UsuariosIncludeObjectSchema.optional(), where: UsuariosWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UsuariosFindUniqueOrThrowArgs>;

export const UsuariosFindUniqueOrThrowZodSchema = z.object({ select: UsuariosSelectObjectSchema.optional(), include: UsuariosIncludeObjectSchema.optional(), where: UsuariosWhereUniqueInputObjectSchema }).strict();