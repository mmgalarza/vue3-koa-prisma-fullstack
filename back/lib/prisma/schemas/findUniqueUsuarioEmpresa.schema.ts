import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuarioEmpresaSelectObjectSchema as UsuarioEmpresaSelectObjectSchema } from './objects/UsuarioEmpresaSelect.schema';
import { UsuarioEmpresaIncludeObjectSchema as UsuarioEmpresaIncludeObjectSchema } from './objects/UsuarioEmpresaInclude.schema';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './objects/UsuarioEmpresaWhereUniqueInput.schema';

export const UsuarioEmpresaFindUniqueSchema: z.ZodType<Prisma.UsuarioEmpresaFindUniqueArgs> = z.object({ select: UsuarioEmpresaSelectObjectSchema.optional(), include: UsuarioEmpresaIncludeObjectSchema.optional(), where: UsuarioEmpresaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UsuarioEmpresaFindUniqueArgs>;

export const UsuarioEmpresaFindUniqueZodSchema = z.object({ select: UsuarioEmpresaSelectObjectSchema.optional(), include: UsuarioEmpresaIncludeObjectSchema.optional(), where: UsuarioEmpresaWhereUniqueInputObjectSchema }).strict();