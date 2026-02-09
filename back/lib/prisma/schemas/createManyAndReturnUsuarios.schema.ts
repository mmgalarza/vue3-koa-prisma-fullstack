import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuariosSelectObjectSchema as UsuariosSelectObjectSchema } from './objects/UsuariosSelect.schema';
import { UsuariosCreateManyInputObjectSchema as UsuariosCreateManyInputObjectSchema } from './objects/UsuariosCreateManyInput.schema';

export const UsuariosCreateManyAndReturnSchema: z.ZodType<Prisma.UsuariosCreateManyAndReturnArgs> = z.object({ select: UsuariosSelectObjectSchema.optional(), data: z.union([ UsuariosCreateManyInputObjectSchema, z.array(UsuariosCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UsuariosCreateManyAndReturnArgs>;

export const UsuariosCreateManyAndReturnZodSchema = z.object({ select: UsuariosSelectObjectSchema.optional(), data: z.union([ UsuariosCreateManyInputObjectSchema, z.array(UsuariosCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();