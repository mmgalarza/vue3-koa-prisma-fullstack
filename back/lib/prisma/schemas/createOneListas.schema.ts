import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasSelectObjectSchema as ListasSelectObjectSchema } from './objects/ListasSelect.schema';
import { ListasIncludeObjectSchema as ListasIncludeObjectSchema } from './objects/ListasInclude.schema';
import { ListasCreateInputObjectSchema as ListasCreateInputObjectSchema } from './objects/ListasCreateInput.schema';
import { ListasUncheckedCreateInputObjectSchema as ListasUncheckedCreateInputObjectSchema } from './objects/ListasUncheckedCreateInput.schema';

export const ListasCreateOneSchema: z.ZodType<Prisma.ListasCreateArgs> = z.object({ select: ListasSelectObjectSchema.optional(), include: ListasIncludeObjectSchema.optional(), data: z.union([ListasCreateInputObjectSchema, ListasUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ListasCreateArgs>;

export const ListasCreateOneZodSchema = z.object({ select: ListasSelectObjectSchema.optional(), include: ListasIncludeObjectSchema.optional(), data: z.union([ListasCreateInputObjectSchema, ListasUncheckedCreateInputObjectSchema]) }).strict();