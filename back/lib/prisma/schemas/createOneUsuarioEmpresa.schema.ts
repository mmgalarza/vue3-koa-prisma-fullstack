import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuarioEmpresaSelectObjectSchema as UsuarioEmpresaSelectObjectSchema } from './objects/UsuarioEmpresaSelect.schema';
import { UsuarioEmpresaIncludeObjectSchema as UsuarioEmpresaIncludeObjectSchema } from './objects/UsuarioEmpresaInclude.schema';
import { UsuarioEmpresaCreateInputObjectSchema as UsuarioEmpresaCreateInputObjectSchema } from './objects/UsuarioEmpresaCreateInput.schema';
import { UsuarioEmpresaUncheckedCreateInputObjectSchema as UsuarioEmpresaUncheckedCreateInputObjectSchema } from './objects/UsuarioEmpresaUncheckedCreateInput.schema';

export const UsuarioEmpresaCreateOneSchema: z.ZodType<Prisma.UsuarioEmpresaCreateArgs> = z.object({ select: UsuarioEmpresaSelectObjectSchema.optional(), include: UsuarioEmpresaIncludeObjectSchema.optional(), data: z.union([UsuarioEmpresaCreateInputObjectSchema, UsuarioEmpresaUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UsuarioEmpresaCreateArgs>;

export const UsuarioEmpresaCreateOneZodSchema = z.object({ select: UsuarioEmpresaSelectObjectSchema.optional(), include: UsuarioEmpresaIncludeObjectSchema.optional(), data: z.union([UsuarioEmpresaCreateInputObjectSchema, UsuarioEmpresaUncheckedCreateInputObjectSchema]) }).strict();