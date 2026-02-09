import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuarioEmpresaCreateManyInputObjectSchema as UsuarioEmpresaCreateManyInputObjectSchema } from './objects/UsuarioEmpresaCreateManyInput.schema';

export const UsuarioEmpresaCreateManySchema: z.ZodType<Prisma.UsuarioEmpresaCreateManyArgs> = z.object({ data: z.union([ UsuarioEmpresaCreateManyInputObjectSchema, z.array(UsuarioEmpresaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioEmpresaCreateManyArgs>;

export const UsuarioEmpresaCreateManyZodSchema = z.object({ data: z.union([ UsuarioEmpresaCreateManyInputObjectSchema, z.array(UsuarioEmpresaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();