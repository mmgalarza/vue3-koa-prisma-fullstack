import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasSelectObjectSchema as ListasSelectObjectSchema } from './objects/ListasSelect.schema';
import { ListasIncludeObjectSchema as ListasIncludeObjectSchema } from './objects/ListasInclude.schema';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './objects/ListasWhereUniqueInput.schema';
import { ListasCreateInputObjectSchema as ListasCreateInputObjectSchema } from './objects/ListasCreateInput.schema';
import { ListasUncheckedCreateInputObjectSchema as ListasUncheckedCreateInputObjectSchema } from './objects/ListasUncheckedCreateInput.schema';
import { ListasUpdateInputObjectSchema as ListasUpdateInputObjectSchema } from './objects/ListasUpdateInput.schema';
import { ListasUncheckedUpdateInputObjectSchema as ListasUncheckedUpdateInputObjectSchema } from './objects/ListasUncheckedUpdateInput.schema';

export const ListasUpsertOneSchema: z.ZodType<Prisma.ListasUpsertArgs> = z.object({ select: ListasSelectObjectSchema.optional(), include: ListasIncludeObjectSchema.optional(), where: ListasWhereUniqueInputObjectSchema, create: z.union([ ListasCreateInputObjectSchema, ListasUncheckedCreateInputObjectSchema ]), update: z.union([ ListasUpdateInputObjectSchema, ListasUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ListasUpsertArgs>;

export const ListasUpsertOneZodSchema = z.object({ select: ListasSelectObjectSchema.optional(), include: ListasIncludeObjectSchema.optional(), where: ListasWhereUniqueInputObjectSchema, create: z.union([ ListasCreateInputObjectSchema, ListasUncheckedCreateInputObjectSchema ]), update: z.union([ ListasUpdateInputObjectSchema, ListasUncheckedUpdateInputObjectSchema ]) }).strict();