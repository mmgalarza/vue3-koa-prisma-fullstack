import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasOrderByWithRelationInputObjectSchema as ListasOrderByWithRelationInputObjectSchema } from './objects/ListasOrderByWithRelationInput.schema';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './objects/ListasWhereInput.schema';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './objects/ListasWhereUniqueInput.schema';
import { ListasCountAggregateInputObjectSchema as ListasCountAggregateInputObjectSchema } from './objects/ListasCountAggregateInput.schema';

export const ListasCountSchema: z.ZodType<Prisma.ListasCountArgs> = z.object({ orderBy: z.union([ListasOrderByWithRelationInputObjectSchema, ListasOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListasWhereInputObjectSchema.optional(), cursor: ListasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ListasCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ListasCountArgs>;

export const ListasCountZodSchema = z.object({ orderBy: z.union([ListasOrderByWithRelationInputObjectSchema, ListasOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListasWhereInputObjectSchema.optional(), cursor: ListasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ListasCountAggregateInputObjectSchema ]).optional() }).strict();