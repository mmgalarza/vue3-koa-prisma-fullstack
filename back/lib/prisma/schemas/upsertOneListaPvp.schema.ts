import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpSelectObjectSchema as ListaPvpSelectObjectSchema } from './objects/ListaPvpSelect.schema';
import { ListaPvpIncludeObjectSchema as ListaPvpIncludeObjectSchema } from './objects/ListaPvpInclude.schema';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './objects/ListaPvpWhereUniqueInput.schema';
import { ListaPvpCreateInputObjectSchema as ListaPvpCreateInputObjectSchema } from './objects/ListaPvpCreateInput.schema';
import { ListaPvpUncheckedCreateInputObjectSchema as ListaPvpUncheckedCreateInputObjectSchema } from './objects/ListaPvpUncheckedCreateInput.schema';
import { ListaPvpUpdateInputObjectSchema as ListaPvpUpdateInputObjectSchema } from './objects/ListaPvpUpdateInput.schema';
import { ListaPvpUncheckedUpdateInputObjectSchema as ListaPvpUncheckedUpdateInputObjectSchema } from './objects/ListaPvpUncheckedUpdateInput.schema';

export const ListaPvpUpsertOneSchema: z.ZodType<Prisma.ListaPvpUpsertArgs> = z.object({ select: ListaPvpSelectObjectSchema.optional(), include: ListaPvpIncludeObjectSchema.optional(), where: ListaPvpWhereUniqueInputObjectSchema, create: z.union([ ListaPvpCreateInputObjectSchema, ListaPvpUncheckedCreateInputObjectSchema ]), update: z.union([ ListaPvpUpdateInputObjectSchema, ListaPvpUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ListaPvpUpsertArgs>;

export const ListaPvpUpsertOneZodSchema = z.object({ select: ListaPvpSelectObjectSchema.optional(), include: ListaPvpIncludeObjectSchema.optional(), where: ListaPvpWhereUniqueInputObjectSchema, create: z.union([ ListaPvpCreateInputObjectSchema, ListaPvpUncheckedCreateInputObjectSchema ]), update: z.union([ ListaPvpUpdateInputObjectSchema, ListaPvpUncheckedUpdateInputObjectSchema ]) }).strict();