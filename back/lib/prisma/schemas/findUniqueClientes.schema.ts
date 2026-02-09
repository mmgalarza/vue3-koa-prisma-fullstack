import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientesSelectObjectSchema as ClientesSelectObjectSchema } from './objects/ClientesSelect.schema';
import { ClientesIncludeObjectSchema as ClientesIncludeObjectSchema } from './objects/ClientesInclude.schema';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './objects/ClientesWhereUniqueInput.schema';

export const ClientesFindUniqueSchema: z.ZodType<Prisma.ClientesFindUniqueArgs> = z.object({ select: ClientesSelectObjectSchema.optional(), include: ClientesIncludeObjectSchema.optional(), where: ClientesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientesFindUniqueArgs>;

export const ClientesFindUniqueZodSchema = z.object({ select: ClientesSelectObjectSchema.optional(), include: ClientesIncludeObjectSchema.optional(), where: ClientesWhereUniqueInputObjectSchema }).strict();