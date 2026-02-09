import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasUpdateManyMutationInputObjectSchema as ListasUpdateManyMutationInputObjectSchema } from './objects/ListasUpdateManyMutationInput.schema';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './objects/ListasWhereInput.schema';

export const ListasUpdateManySchema: z.ZodType<Prisma.ListasUpdateManyArgs> = z.object({ data: ListasUpdateManyMutationInputObjectSchema, where: ListasWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListasUpdateManyArgs>;

export const ListasUpdateManyZodSchema = z.object({ data: ListasUpdateManyMutationInputObjectSchema, where: ListasWhereInputObjectSchema.optional() }).strict();