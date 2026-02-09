import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuarioEmpresaWhereInputObjectSchema as UsuarioEmpresaWhereInputObjectSchema } from './objects/UsuarioEmpresaWhereInput.schema';

export const UsuarioEmpresaDeleteManySchema: z.ZodType<Prisma.UsuarioEmpresaDeleteManyArgs> = z.object({ where: UsuarioEmpresaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioEmpresaDeleteManyArgs>;

export const UsuarioEmpresaDeleteManyZodSchema = z.object({ where: UsuarioEmpresaWhereInputObjectSchema.optional() }).strict();