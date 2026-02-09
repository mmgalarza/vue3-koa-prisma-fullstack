import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuarioEmpresaSelectObjectSchema as UsuarioEmpresaSelectObjectSchema } from './objects/UsuarioEmpresaSelect.schema';
import { UsuarioEmpresaUpdateManyMutationInputObjectSchema as UsuarioEmpresaUpdateManyMutationInputObjectSchema } from './objects/UsuarioEmpresaUpdateManyMutationInput.schema';
import { UsuarioEmpresaWhereInputObjectSchema as UsuarioEmpresaWhereInputObjectSchema } from './objects/UsuarioEmpresaWhereInput.schema';

export const UsuarioEmpresaUpdateManyAndReturnSchema: z.ZodType<Prisma.UsuarioEmpresaUpdateManyAndReturnArgs> = z.object({ select: UsuarioEmpresaSelectObjectSchema.optional(), data: UsuarioEmpresaUpdateManyMutationInputObjectSchema, where: UsuarioEmpresaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpdateManyAndReturnArgs>;

export const UsuarioEmpresaUpdateManyAndReturnZodSchema = z.object({ select: UsuarioEmpresaSelectObjectSchema.optional(), data: UsuarioEmpresaUpdateManyMutationInputObjectSchema, where: UsuarioEmpresaWhereInputObjectSchema.optional() }).strict();