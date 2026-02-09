import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuarioEmpresaSelectObjectSchema as UsuarioEmpresaSelectObjectSchema } from './objects/UsuarioEmpresaSelect.schema';
import { UsuarioEmpresaIncludeObjectSchema as UsuarioEmpresaIncludeObjectSchema } from './objects/UsuarioEmpresaInclude.schema';
import { UsuarioEmpresaUpdateInputObjectSchema as UsuarioEmpresaUpdateInputObjectSchema } from './objects/UsuarioEmpresaUpdateInput.schema';
import { UsuarioEmpresaUncheckedUpdateInputObjectSchema as UsuarioEmpresaUncheckedUpdateInputObjectSchema } from './objects/UsuarioEmpresaUncheckedUpdateInput.schema';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './objects/UsuarioEmpresaWhereUniqueInput.schema';

export const UsuarioEmpresaUpdateOneSchema: z.ZodType<Prisma.UsuarioEmpresaUpdateArgs> = z.object({ select: UsuarioEmpresaSelectObjectSchema.optional(), include: UsuarioEmpresaIncludeObjectSchema.optional(), data: z.union([UsuarioEmpresaUpdateInputObjectSchema, UsuarioEmpresaUncheckedUpdateInputObjectSchema]), where: UsuarioEmpresaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpdateArgs>;

export const UsuarioEmpresaUpdateOneZodSchema = z.object({ select: UsuarioEmpresaSelectObjectSchema.optional(), include: UsuarioEmpresaIncludeObjectSchema.optional(), data: z.union([UsuarioEmpresaUpdateInputObjectSchema, UsuarioEmpresaUncheckedUpdateInputObjectSchema]), where: UsuarioEmpresaWhereUniqueInputObjectSchema }).strict();