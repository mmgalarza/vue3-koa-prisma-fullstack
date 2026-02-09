import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuariosCreateManyInputObjectSchema as UsuariosCreateManyInputObjectSchema } from './objects/UsuariosCreateManyInput.schema';

export const UsuariosCreateManySchema: z.ZodType<Prisma.UsuariosCreateManyArgs> = z.object({ data: z.union([ UsuariosCreateManyInputObjectSchema, z.array(UsuariosCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UsuariosCreateManyArgs>;

export const UsuariosCreateManyZodSchema = z.object({ data: z.union([ UsuariosCreateManyInputObjectSchema, z.array(UsuariosCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();