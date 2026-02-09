import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuarioEmpresaUpdateManyMutationInputObjectSchema as UsuarioEmpresaUpdateManyMutationInputObjectSchema } from './objects/UsuarioEmpresaUpdateManyMutationInput.schema';
import { UsuarioEmpresaWhereInputObjectSchema as UsuarioEmpresaWhereInputObjectSchema } from './objects/UsuarioEmpresaWhereInput.schema';

export const UsuarioEmpresaUpdateManySchema: z.ZodType<Prisma.UsuarioEmpresaUpdateManyArgs> = z.object({ data: UsuarioEmpresaUpdateManyMutationInputObjectSchema, where: UsuarioEmpresaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpdateManyArgs>;

export const UsuarioEmpresaUpdateManyZodSchema = z.object({ data: UsuarioEmpresaUpdateManyMutationInputObjectSchema, where: UsuarioEmpresaWhereInputObjectSchema.optional() }).strict();