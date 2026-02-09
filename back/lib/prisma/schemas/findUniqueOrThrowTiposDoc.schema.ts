import type { Prisma } from '../client';
import * as z from 'zod';
import { TiposDocSelectObjectSchema as TiposDocSelectObjectSchema } from './objects/TiposDocSelect.schema';
import { TiposDocIncludeObjectSchema as TiposDocIncludeObjectSchema } from './objects/TiposDocInclude.schema';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './objects/TiposDocWhereUniqueInput.schema';

export const TiposDocFindUniqueOrThrowSchema: z.ZodType<Prisma.TiposDocFindUniqueOrThrowArgs> = z.object({ select: TiposDocSelectObjectSchema.optional(), include: TiposDocIncludeObjectSchema.optional(), where: TiposDocWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TiposDocFindUniqueOrThrowArgs>;

export const TiposDocFindUniqueOrThrowZodSchema = z.object({ select: TiposDocSelectObjectSchema.optional(), include: TiposDocIncludeObjectSchema.optional(), where: TiposDocWhereUniqueInputObjectSchema }).strict();