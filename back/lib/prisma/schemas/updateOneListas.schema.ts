import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasSelectObjectSchema as ListasSelectObjectSchema } from './objects/ListasSelect.schema';
import { ListasIncludeObjectSchema as ListasIncludeObjectSchema } from './objects/ListasInclude.schema';
import { ListasUpdateInputObjectSchema as ListasUpdateInputObjectSchema } from './objects/ListasUpdateInput.schema';
import { ListasUncheckedUpdateInputObjectSchema as ListasUncheckedUpdateInputObjectSchema } from './objects/ListasUncheckedUpdateInput.schema';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './objects/ListasWhereUniqueInput.schema';

export const ListasUpdateOneSchema: z.ZodType<Prisma.ListasUpdateArgs> = z.object({ select: ListasSelectObjectSchema.optional(), include: ListasIncludeObjectSchema.optional(), data: z.union([ListasUpdateInputObjectSchema, ListasUncheckedUpdateInputObjectSchema]), where: ListasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ListasUpdateArgs>;

export const ListasUpdateOneZodSchema = z.object({ select: ListasSelectObjectSchema.optional(), include: ListasIncludeObjectSchema.optional(), data: z.union([ListasUpdateInputObjectSchema, ListasUncheckedUpdateInputObjectSchema]), where: ListasWhereUniqueInputObjectSchema }).strict();