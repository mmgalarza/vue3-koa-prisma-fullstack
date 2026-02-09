import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpOrderByWithRelationInputObjectSchema as ListaPvpOrderByWithRelationInputObjectSchema } from './objects/ListaPvpOrderByWithRelationInput.schema';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './objects/ListaPvpWhereInput.schema';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './objects/ListaPvpWhereUniqueInput.schema';
import { ListaPvpCountAggregateInputObjectSchema as ListaPvpCountAggregateInputObjectSchema } from './objects/ListaPvpCountAggregateInput.schema';

export const ListaPvpCountSchema: z.ZodType<Prisma.ListaPvpCountArgs> = z.object({ orderBy: z.union([ListaPvpOrderByWithRelationInputObjectSchema, ListaPvpOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListaPvpWhereInputObjectSchema.optional(), cursor: ListaPvpWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ListaPvpCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpCountArgs>;

export const ListaPvpCountZodSchema = z.object({ orderBy: z.union([ListaPvpOrderByWithRelationInputObjectSchema, ListaPvpOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListaPvpWhereInputObjectSchema.optional(), cursor: ListaPvpWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ListaPvpCountAggregateInputObjectSchema ]).optional() }).strict();