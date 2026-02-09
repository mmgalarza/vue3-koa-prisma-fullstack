import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasDetOrderByWithRelationInputObjectSchema as ListasDetOrderByWithRelationInputObjectSchema } from './objects/ListasDetOrderByWithRelationInput.schema';
import { ListasDetWhereInputObjectSchema as ListasDetWhereInputObjectSchema } from './objects/ListasDetWhereInput.schema';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './objects/ListasDetWhereUniqueInput.schema';
import { ListasDetCountAggregateInputObjectSchema as ListasDetCountAggregateInputObjectSchema } from './objects/ListasDetCountAggregateInput.schema';

export const ListasDetCountSchema: z.ZodType<Prisma.ListasDetCountArgs> = z.object({ orderBy: z.union([ListasDetOrderByWithRelationInputObjectSchema, ListasDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListasDetWhereInputObjectSchema.optional(), cursor: ListasDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ListasDetCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ListasDetCountArgs>;

export const ListasDetCountZodSchema = z.object({ orderBy: z.union([ListasDetOrderByWithRelationInputObjectSchema, ListasDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListasDetWhereInputObjectSchema.optional(), cursor: ListasDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ListasDetCountAggregateInputObjectSchema ]).optional() }).strict();