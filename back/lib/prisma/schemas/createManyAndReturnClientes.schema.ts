import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientesSelectObjectSchema as ClientesSelectObjectSchema } from './objects/ClientesSelect.schema';
import { ClientesCreateManyInputObjectSchema as ClientesCreateManyInputObjectSchema } from './objects/ClientesCreateManyInput.schema';

export const ClientesCreateManyAndReturnSchema: z.ZodType<Prisma.ClientesCreateManyAndReturnArgs> = z.object({ select: ClientesSelectObjectSchema.optional(), data: z.union([ ClientesCreateManyInputObjectSchema, z.array(ClientesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClientesCreateManyAndReturnArgs>;

export const ClientesCreateManyAndReturnZodSchema = z.object({ select: ClientesSelectObjectSchema.optional(), data: z.union([ ClientesCreateManyInputObjectSchema, z.array(ClientesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();