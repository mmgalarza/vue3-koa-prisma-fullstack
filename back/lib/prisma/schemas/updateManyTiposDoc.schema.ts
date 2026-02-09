import type { Prisma } from '../client';
import * as z from 'zod';
import { TiposDocUpdateManyMutationInputObjectSchema as TiposDocUpdateManyMutationInputObjectSchema } from './objects/TiposDocUpdateManyMutationInput.schema';
import { TiposDocWhereInputObjectSchema as TiposDocWhereInputObjectSchema } from './objects/TiposDocWhereInput.schema';

export const TiposDocUpdateManySchema: z.ZodType<Prisma.TiposDocUpdateManyArgs> = z.object({ data: TiposDocUpdateManyMutationInputObjectSchema, where: TiposDocWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TiposDocUpdateManyArgs>;

export const TiposDocUpdateManyZodSchema = z.object({ data: TiposDocUpdateManyMutationInputObjectSchema, where: TiposDocWhereInputObjectSchema.optional() }).strict();