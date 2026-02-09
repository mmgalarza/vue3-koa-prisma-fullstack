import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientesSelectObjectSchema as ClientesSelectObjectSchema } from './objects/ClientesSelect.schema';
import { ClientesIncludeObjectSchema as ClientesIncludeObjectSchema } from './objects/ClientesInclude.schema';
import { ClientesCreateInputObjectSchema as ClientesCreateInputObjectSchema } from './objects/ClientesCreateInput.schema';
import { ClientesUncheckedCreateInputObjectSchema as ClientesUncheckedCreateInputObjectSchema } from './objects/ClientesUncheckedCreateInput.schema';

export const ClientesCreateOneSchema: z.ZodType<Prisma.ClientesCreateArgs> = z.object({ select: ClientesSelectObjectSchema.optional(), include: ClientesIncludeObjectSchema.optional(), data: z.union([ClientesCreateInputObjectSchema, ClientesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ClientesCreateArgs>;

export const ClientesCreateOneZodSchema = z.object({ select: ClientesSelectObjectSchema.optional(), include: ClientesIncludeObjectSchema.optional(), data: z.union([ClientesCreateInputObjectSchema, ClientesUncheckedCreateInputObjectSchema]) }).strict();