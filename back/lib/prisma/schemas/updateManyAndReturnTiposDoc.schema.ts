import type { Prisma } from '../client';
import * as z from 'zod';
import { TiposDocSelectObjectSchema as TiposDocSelectObjectSchema } from './objects/TiposDocSelect.schema';
import { TiposDocUpdateManyMutationInputObjectSchema as TiposDocUpdateManyMutationInputObjectSchema } from './objects/TiposDocUpdateManyMutationInput.schema';
import { TiposDocWhereInputObjectSchema as TiposDocWhereInputObjectSchema } from './objects/TiposDocWhereInput.schema';

export const TiposDocUpdateManyAndReturnSchema: z.ZodType<Prisma.TiposDocUpdateManyAndReturnArgs> = z.object({ select: TiposDocSelectObjectSchema.optional(), data: TiposDocUpdateManyMutationInputObjectSchema, where: TiposDocWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TiposDocUpdateManyAndReturnArgs>;

export const TiposDocUpdateManyAndReturnZodSchema = z.object({ select: TiposDocSelectObjectSchema.optional(), data: TiposDocUpdateManyMutationInputObjectSchema, where: TiposDocWhereInputObjectSchema.optional() }).strict();