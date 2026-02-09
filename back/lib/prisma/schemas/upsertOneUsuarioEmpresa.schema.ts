import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuarioEmpresaSelectObjectSchema as UsuarioEmpresaSelectObjectSchema } from './objects/UsuarioEmpresaSelect.schema';
import { UsuarioEmpresaIncludeObjectSchema as UsuarioEmpresaIncludeObjectSchema } from './objects/UsuarioEmpresaInclude.schema';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './objects/UsuarioEmpresaWhereUniqueInput.schema';
import { UsuarioEmpresaCreateInputObjectSchema as UsuarioEmpresaCreateInputObjectSchema } from './objects/UsuarioEmpresaCreateInput.schema';
import { UsuarioEmpresaUncheckedCreateInputObjectSchema as UsuarioEmpresaUncheckedCreateInputObjectSchema } from './objects/UsuarioEmpresaUncheckedCreateInput.schema';
import { UsuarioEmpresaUpdateInputObjectSchema as UsuarioEmpresaUpdateInputObjectSchema } from './objects/UsuarioEmpresaUpdateInput.schema';
import { UsuarioEmpresaUncheckedUpdateInputObjectSchema as UsuarioEmpresaUncheckedUpdateInputObjectSchema } from './objects/UsuarioEmpresaUncheckedUpdateInput.schema';

export const UsuarioEmpresaUpsertOneSchema: z.ZodType<Prisma.UsuarioEmpresaUpsertArgs> = z.object({ select: UsuarioEmpresaSelectObjectSchema.optional(), include: UsuarioEmpresaIncludeObjectSchema.optional(), where: UsuarioEmpresaWhereUniqueInputObjectSchema, create: z.union([ UsuarioEmpresaCreateInputObjectSchema, UsuarioEmpresaUncheckedCreateInputObjectSchema ]), update: z.union([ UsuarioEmpresaUpdateInputObjectSchema, UsuarioEmpresaUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpsertArgs>;

export const UsuarioEmpresaUpsertOneZodSchema = z.object({ select: UsuarioEmpresaSelectObjectSchema.optional(), include: UsuarioEmpresaIncludeObjectSchema.optional(), where: UsuarioEmpresaWhereUniqueInputObjectSchema, create: z.union([ UsuarioEmpresaCreateInputObjectSchema, UsuarioEmpresaUncheckedCreateInputObjectSchema ]), update: z.union([ UsuarioEmpresaUpdateInputObjectSchema, UsuarioEmpresaUncheckedUpdateInputObjectSchema ]) }).strict();