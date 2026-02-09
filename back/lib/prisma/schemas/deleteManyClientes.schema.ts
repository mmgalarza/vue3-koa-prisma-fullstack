import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientesWhereInputObjectSchema as ClientesWhereInputObjectSchema } from './objects/ClientesWhereInput.schema';

export const ClientesDeleteManySchema: z.ZodType<Prisma.ClientesDeleteManyArgs> = z.object({ where: ClientesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientesDeleteManyArgs>;

export const ClientesDeleteManyZodSchema = z.object({ where: ClientesWhereInputObjectSchema.optional() }).strict();