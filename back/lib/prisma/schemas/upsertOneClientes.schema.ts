import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientesSelectObjectSchema as ClientesSelectObjectSchema } from './objects/ClientesSelect.schema';
import { ClientesIncludeObjectSchema as ClientesIncludeObjectSchema } from './objects/ClientesInclude.schema';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './objects/ClientesWhereUniqueInput.schema';
import { ClientesCreateInputObjectSchema as ClientesCreateInputObjectSchema } from './objects/ClientesCreateInput.schema';
import { ClientesUncheckedCreateInputObjectSchema as ClientesUncheckedCreateInputObjectSchema } from './objects/ClientesUncheckedCreateInput.schema';
import { ClientesUpdateInputObjectSchema as ClientesUpdateInputObjectSchema } from './objects/ClientesUpdateInput.schema';
import { ClientesUncheckedUpdateInputObjectSchema as ClientesUncheckedUpdateInputObjectSchema } from './objects/ClientesUncheckedUpdateInput.schema';

export const ClientesUpsertOneSchema: z.ZodType<Prisma.ClientesUpsertArgs> = z.object({ select: ClientesSelectObjectSchema.optional(), include: ClientesIncludeObjectSchema.optional(), where: ClientesWhereUniqueInputObjectSchema, create: z.union([ ClientesCreateInputObjectSchema, ClientesUncheckedCreateInputObjectSchema ]), update: z.union([ ClientesUpdateInputObjectSchema, ClientesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ClientesUpsertArgs>;

export const ClientesUpsertOneZodSchema = z.object({ select: ClientesSelectObjectSchema.optional(), include: ClientesIncludeObjectSchema.optional(), where: ClientesWhereUniqueInputObjectSchema, create: z.union([ ClientesCreateInputObjectSchema, ClientesUncheckedCreateInputObjectSchema ]), update: z.union([ ClientesUpdateInputObjectSchema, ClientesUncheckedUpdateInputObjectSchema ]) }).strict();