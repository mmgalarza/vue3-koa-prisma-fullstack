import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasOrderByWithRelationInputObjectSchema as ListasOrderByWithRelationInputObjectSchema } from './objects/ListasOrderByWithRelationInput.schema';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './objects/ListasWhereInput.schema';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './objects/ListasWhereUniqueInput.schema';
import { ListasCountAggregateInputObjectSchema as ListasCountAggregateInputObjectSchema } from './objects/ListasCountAggregateInput.schema';
import { ListasMinAggregateInputObjectSchema as ListasMinAggregateInputObjectSchema } from './objects/ListasMinAggregateInput.schema';
import { ListasMaxAggregateInputObjectSchema as ListasMaxAggregateInputObjectSchema } from './objects/ListasMaxAggregateInput.schema';
import { ListasAvgAggregateInputObjectSchema as ListasAvgAggregateInputObjectSchema } from './objects/ListasAvgAggregateInput.schema';
import { ListasSumAggregateInputObjectSchema as ListasSumAggregateInputObjectSchema } from './objects/ListasSumAggregateInput.schema';

export const ListasAggregateSchema: z.ZodType<Prisma.ListasAggregateArgs> = z.object({ orderBy: z.union([ListasOrderByWithRelationInputObjectSchema, ListasOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListasWhereInputObjectSchema.optional(), cursor: ListasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ListasCountAggregateInputObjectSchema ]).optional(), _min: ListasMinAggregateInputObjectSchema.optional(), _max: ListasMaxAggregateInputObjectSchema.optional(), _avg: ListasAvgAggregateInputObjectSchema.optional(), _sum: ListasSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListasAggregateArgs>;

export const ListasAggregateZodSchema = z.object({ orderBy: z.union([ListasOrderByWithRelationInputObjectSchema, ListasOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListasWhereInputObjectSchema.optional(), cursor: ListasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ListasCountAggregateInputObjectSchema ]).optional(), _min: ListasMinAggregateInputObjectSchema.optional(), _max: ListasMaxAggregateInputObjectSchema.optional(), _avg: ListasAvgAggregateInputObjectSchema.optional(), _sum: ListasSumAggregateInputObjectSchema.optional() }).strict();