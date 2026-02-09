import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuarioEmpresaSelectObjectSchema as UsuarioEmpresaSelectObjectSchema } from './objects/UsuarioEmpresaSelect.schema';
import { UsuarioEmpresaCreateManyInputObjectSchema as UsuarioEmpresaCreateManyInputObjectSchema } from './objects/UsuarioEmpresaCreateManyInput.schema';

export const UsuarioEmpresaCreateManyAndReturnSchema: z.ZodType<Prisma.UsuarioEmpresaCreateManyAndReturnArgs> = z.object({ select: UsuarioEmpresaSelectObjectSchema.optional(), data: z.union([ UsuarioEmpresaCreateManyInputObjectSchema, z.array(UsuarioEmpresaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioEmpresaCreateManyAndReturnArgs>;

export const UsuarioEmpresaCreateManyAndReturnZodSchema = z.object({ select: UsuarioEmpresaSelectObjectSchema.optional(), data: z.union([ UsuarioEmpresaCreateManyInputObjectSchema, z.array(UsuarioEmpresaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();