import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientesCreateManyInputObjectSchema as ClientesCreateManyInputObjectSchema } from './objects/ClientesCreateManyInput.schema';

export const ClientesCreateManySchema: z.ZodType<Prisma.ClientesCreateManyArgs> = z.object({ data: z.union([ ClientesCreateManyInputObjectSchema, z.array(ClientesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClientesCreateManyArgs>;

export const ClientesCreateManyZodSchema = z.object({ data: z.union([ ClientesCreateManyInputObjectSchema, z.array(ClientesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();