import type { Prisma } from '../client';
import * as z from 'zod';
import { TiposDocOrderByWithRelationInputObjectSchema as TiposDocOrderByWithRelationInputObjectSchema } from './objects/TiposDocOrderByWithRelationInput.schema';
import { TiposDocWhereInputObjectSchema as TiposDocWhereInputObjectSchema } from './objects/TiposDocWhereInput.schema';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './objects/TiposDocWhereUniqueInput.schema';
import { TiposDocCountAggregateInputObjectSchema as TiposDocCountAggregateInputObjectSchema } from './objects/TiposDocCountAggregateInput.schema';

export const TiposDocCountSchema: z.ZodType<Prisma.TiposDocCountArgs> = z.object({ orderBy: z.union([TiposDocOrderByWithRelationInputObjectSchema, TiposDocOrderByWithRelationInputObjectSchema.array()]).optional(), where: TiposDocWhereInputObjectSchema.optional(), cursor: TiposDocWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TiposDocCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TiposDocCountArgs>;

export const TiposDocCountZodSchema = z.object({ orderBy: z.union([TiposDocOrderByWithRelationInputObjectSchema, TiposDocOrderByWithRelationInputObjectSchema.array()]).optional(), where: TiposDocWhereInputObjectSchema.optional(), cursor: TiposDocWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TiposDocCountAggregateInputObjectSchema ]).optional() }).strict();