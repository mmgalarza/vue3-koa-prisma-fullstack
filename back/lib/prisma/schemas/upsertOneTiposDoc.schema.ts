import type { Prisma } from '../client';
import * as z from 'zod';
import { TiposDocSelectObjectSchema as TiposDocSelectObjectSchema } from './objects/TiposDocSelect.schema';
import { TiposDocIncludeObjectSchema as TiposDocIncludeObjectSchema } from './objects/TiposDocInclude.schema';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './objects/TiposDocWhereUniqueInput.schema';
import { TiposDocCreateInputObjectSchema as TiposDocCreateInputObjectSchema } from './objects/TiposDocCreateInput.schema';
import { TiposDocUncheckedCreateInputObjectSchema as TiposDocUncheckedCreateInputObjectSchema } from './objects/TiposDocUncheckedCreateInput.schema';
import { TiposDocUpdateInputObjectSchema as TiposDocUpdateInputObjectSchema } from './objects/TiposDocUpdateInput.schema';
import { TiposDocUncheckedUpdateInputObjectSchema as TiposDocUncheckedUpdateInputObjectSchema } from './objects/TiposDocUncheckedUpdateInput.schema';

export const TiposDocUpsertOneSchema: z.ZodType<Prisma.TiposDocUpsertArgs> = z.object({ select: TiposDocSelectObjectSchema.optional(), include: TiposDocIncludeObjectSchema.optional(), where: TiposDocWhereUniqueInputObjectSchema, create: z.union([ TiposDocCreateInputObjectSchema, TiposDocUncheckedCreateInputObjectSchema ]), update: z.union([ TiposDocUpdateInputObjectSchema, TiposDocUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TiposDocUpsertArgs>;

export const TiposDocUpsertOneZodSchema = z.object({ select: TiposDocSelectObjectSchema.optional(), include: TiposDocIncludeObjectSchema.optional(), where: TiposDocWhereUniqueInputObjectSchema, create: z.union([ TiposDocCreateInputObjectSchema, TiposDocUncheckedCreateInputObjectSchema ]), update: z.union([ TiposDocUpdateInputObjectSchema, TiposDocUncheckedUpdateInputObjectSchema ]) }).strict();