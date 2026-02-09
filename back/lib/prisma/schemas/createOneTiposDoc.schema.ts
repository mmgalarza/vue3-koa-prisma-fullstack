import type { Prisma } from '../client';
import * as z from 'zod';
import { TiposDocSelectObjectSchema as TiposDocSelectObjectSchema } from './objects/TiposDocSelect.schema';
import { TiposDocIncludeObjectSchema as TiposDocIncludeObjectSchema } from './objects/TiposDocInclude.schema';
import { TiposDocCreateInputObjectSchema as TiposDocCreateInputObjectSchema } from './objects/TiposDocCreateInput.schema';
import { TiposDocUncheckedCreateInputObjectSchema as TiposDocUncheckedCreateInputObjectSchema } from './objects/TiposDocUncheckedCreateInput.schema';

export const TiposDocCreateOneSchema: z.ZodType<Prisma.TiposDocCreateArgs> = z.object({ select: TiposDocSelectObjectSchema.optional(), include: TiposDocIncludeObjectSchema.optional(), data: z.union([TiposDocCreateInputObjectSchema, TiposDocUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TiposDocCreateArgs>;

export const TiposDocCreateOneZodSchema = z.object({ select: TiposDocSelectObjectSchema.optional(), include: TiposDocIncludeObjectSchema.optional(), data: z.union([TiposDocCreateInputObjectSchema, TiposDocUncheckedCreateInputObjectSchema]) }).strict();