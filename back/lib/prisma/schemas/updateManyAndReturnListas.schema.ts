import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasSelectObjectSchema as ListasSelectObjectSchema } from './objects/ListasSelect.schema';
import { ListasUpdateManyMutationInputObjectSchema as ListasUpdateManyMutationInputObjectSchema } from './objects/ListasUpdateManyMutationInput.schema';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './objects/ListasWhereInput.schema';

export const ListasUpdateManyAndReturnSchema: z.ZodType<Prisma.ListasUpdateManyAndReturnArgs> = z.object({ select: ListasSelectObjectSchema.optional(), data: ListasUpdateManyMutationInputObjectSchema, where: ListasWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListasUpdateManyAndReturnArgs>;

export const ListasUpdateManyAndReturnZodSchema = z.object({ select: ListasSelectObjectSchema.optional(), data: ListasUpdateManyMutationInputObjectSchema, where: ListasWhereInputObjectSchema.optional() }).strict();