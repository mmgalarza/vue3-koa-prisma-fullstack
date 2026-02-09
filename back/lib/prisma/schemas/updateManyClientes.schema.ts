import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientesUpdateManyMutationInputObjectSchema as ClientesUpdateManyMutationInputObjectSchema } from './objects/ClientesUpdateManyMutationInput.schema';
import { ClientesWhereInputObjectSchema as ClientesWhereInputObjectSchema } from './objects/ClientesWhereInput.schema';

export const ClientesUpdateManySchema: z.ZodType<Prisma.ClientesUpdateManyArgs> = z.object({ data: ClientesUpdateManyMutationInputObjectSchema, where: ClientesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientesUpdateManyArgs>;

export const ClientesUpdateManyZodSchema = z.object({ data: ClientesUpdateManyMutationInputObjectSchema, where: ClientesWhereInputObjectSchema.optional() }).strict();