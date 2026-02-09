import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientesSelectObjectSchema as ClientesSelectObjectSchema } from './objects/ClientesSelect.schema';
import { ClientesIncludeObjectSchema as ClientesIncludeObjectSchema } from './objects/ClientesInclude.schema';
import { ClientesUpdateInputObjectSchema as ClientesUpdateInputObjectSchema } from './objects/ClientesUpdateInput.schema';
import { ClientesUncheckedUpdateInputObjectSchema as ClientesUncheckedUpdateInputObjectSchema } from './objects/ClientesUncheckedUpdateInput.schema';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './objects/ClientesWhereUniqueInput.schema';

export const ClientesUpdateOneSchema: z.ZodType<Prisma.ClientesUpdateArgs> = z.object({ select: ClientesSelectObjectSchema.optional(), include: ClientesIncludeObjectSchema.optional(), data: z.union([ClientesUpdateInputObjectSchema, ClientesUncheckedUpdateInputObjectSchema]), where: ClientesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientesUpdateArgs>;

export const ClientesUpdateOneZodSchema = z.object({ select: ClientesSelectObjectSchema.optional(), include: ClientesIncludeObjectSchema.optional(), data: z.union([ClientesUpdateInputObjectSchema, ClientesUncheckedUpdateInputObjectSchema]), where: ClientesWhereUniqueInputObjectSchema }).strict();