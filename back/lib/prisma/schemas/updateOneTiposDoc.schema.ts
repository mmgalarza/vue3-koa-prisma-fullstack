import type { Prisma } from '../client';
import * as z from 'zod';
import { TiposDocSelectObjectSchema as TiposDocSelectObjectSchema } from './objects/TiposDocSelect.schema';
import { TiposDocIncludeObjectSchema as TiposDocIncludeObjectSchema } from './objects/TiposDocInclude.schema';
import { TiposDocUpdateInputObjectSchema as TiposDocUpdateInputObjectSchema } from './objects/TiposDocUpdateInput.schema';
import { TiposDocUncheckedUpdateInputObjectSchema as TiposDocUncheckedUpdateInputObjectSchema } from './objects/TiposDocUncheckedUpdateInput.schema';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './objects/TiposDocWhereUniqueInput.schema';

export const TiposDocUpdateOneSchema: z.ZodType<Prisma.TiposDocUpdateArgs> = z.object({ select: TiposDocSelectObjectSchema.optional(), include: TiposDocIncludeObjectSchema.optional(), data: z.union([TiposDocUpdateInputObjectSchema, TiposDocUncheckedUpdateInputObjectSchema]), where: TiposDocWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TiposDocUpdateArgs>;

export const TiposDocUpdateOneZodSchema = z.object({ select: TiposDocSelectObjectSchema.optional(), include: TiposDocIncludeObjectSchema.optional(), data: z.union([TiposDocUpdateInputObjectSchema, TiposDocUncheckedUpdateInputObjectSchema]), where: TiposDocWhereUniqueInputObjectSchema }).strict();