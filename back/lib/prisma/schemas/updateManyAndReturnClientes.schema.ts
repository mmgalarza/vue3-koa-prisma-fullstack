import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientesSelectObjectSchema as ClientesSelectObjectSchema } from './objects/ClientesSelect.schema';
import { ClientesUpdateManyMutationInputObjectSchema as ClientesUpdateManyMutationInputObjectSchema } from './objects/ClientesUpdateManyMutationInput.schema';
import { ClientesWhereInputObjectSchema as ClientesWhereInputObjectSchema } from './objects/ClientesWhereInput.schema';

export const ClientesUpdateManyAndReturnSchema: z.ZodType<Prisma.ClientesUpdateManyAndReturnArgs> = z.object({ select: ClientesSelectObjectSchema.optional(), data: ClientesUpdateManyMutationInputObjectSchema, where: ClientesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientesUpdateManyAndReturnArgs>;

export const ClientesUpdateManyAndReturnZodSchema = z.object({ select: ClientesSelectObjectSchema.optional(), data: ClientesUpdateManyMutationInputObjectSchema, where: ClientesWhereInputObjectSchema.optional() }).strict();