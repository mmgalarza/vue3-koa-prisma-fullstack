import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpSelectObjectSchema as ListaPvpSelectObjectSchema } from './objects/ListaPvpSelect.schema';
import { ListaPvpIncludeObjectSchema as ListaPvpIncludeObjectSchema } from './objects/ListaPvpInclude.schema';
import { ListaPvpCreateInputObjectSchema as ListaPvpCreateInputObjectSchema } from './objects/ListaPvpCreateInput.schema';
import { ListaPvpUncheckedCreateInputObjectSchema as ListaPvpUncheckedCreateInputObjectSchema } from './objects/ListaPvpUncheckedCreateInput.schema';

export const ListaPvpCreateOneSchema: z.ZodType<Prisma.ListaPvpCreateArgs> = z.object({ select: ListaPvpSelectObjectSchema.optional(), include: ListaPvpIncludeObjectSchema.optional(), data: z.union([ListaPvpCreateInputObjectSchema, ListaPvpUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ListaPvpCreateArgs>;

export const ListaPvpCreateOneZodSchema = z.object({ select: ListaPvpSelectObjectSchema.optional(), include: ListaPvpIncludeObjectSchema.optional(), data: z.union([ListaPvpCreateInputObjectSchema, ListaPvpUncheckedCreateInputObjectSchema]) }).strict();