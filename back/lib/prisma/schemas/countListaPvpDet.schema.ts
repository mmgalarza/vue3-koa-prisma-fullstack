import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpDetOrderByWithRelationInputObjectSchema as ListaPvpDetOrderByWithRelationInputObjectSchema } from './objects/ListaPvpDetOrderByWithRelationInput.schema';
import { ListaPvpDetWhereInputObjectSchema as ListaPvpDetWhereInputObjectSchema } from './objects/ListaPvpDetWhereInput.schema';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './objects/ListaPvpDetWhereUniqueInput.schema';
import { ListaPvpDetCountAggregateInputObjectSchema as ListaPvpDetCountAggregateInputObjectSchema } from './objects/ListaPvpDetCountAggregateInput.schema';

export const ListaPvpDetCountSchema: z.ZodType<Prisma.ListaPvpDetCountArgs> = z.object({ orderBy: z.union([ListaPvpDetOrderByWithRelationInputObjectSchema, ListaPvpDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListaPvpDetWhereInputObjectSchema.optional(), cursor: ListaPvpDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ListaPvpDetCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpDetCountArgs>;

export const ListaPvpDetCountZodSchema = z.object({ orderBy: z.union([ListaPvpDetOrderByWithRelationInputObjectSchema, ListaPvpDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListaPvpDetWhereInputObjectSchema.optional(), cursor: ListaPvpDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ListaPvpDetCountAggregateInputObjectSchema ]).optional() }).strict();