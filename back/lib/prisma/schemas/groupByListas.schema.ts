import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './objects/ListasWhereInput.schema';
import { ListasOrderByWithAggregationInputObjectSchema as ListasOrderByWithAggregationInputObjectSchema } from './objects/ListasOrderByWithAggregationInput.schema';
import { ListasScalarWhereWithAggregatesInputObjectSchema as ListasScalarWhereWithAggregatesInputObjectSchema } from './objects/ListasScalarWhereWithAggregatesInput.schema';
import { ListasScalarFieldEnumSchema } from './enums/ListasScalarFieldEnum.schema';
import { ListasCountAggregateInputObjectSchema as ListasCountAggregateInputObjectSchema } from './objects/ListasCountAggregateInput.schema';
import { ListasMinAggregateInputObjectSchema as ListasMinAggregateInputObjectSchema } from './objects/ListasMinAggregateInput.schema';
import { ListasMaxAggregateInputObjectSchema as ListasMaxAggregateInputObjectSchema } from './objects/ListasMaxAggregateInput.schema';
import { ListasAvgAggregateInputObjectSchema as ListasAvgAggregateInputObjectSchema } from './objects/ListasAvgAggregateInput.schema';
import { ListasSumAggregateInputObjectSchema as ListasSumAggregateInputObjectSchema } from './objects/ListasSumAggregateInput.schema';

export const ListasGroupBySchema: z.ZodType<Prisma.ListasGroupByArgs> = z.object({ where: ListasWhereInputObjectSchema.optional(), orderBy: z.union([ListasOrderByWithAggregationInputObjectSchema, ListasOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ListasScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ListasScalarFieldEnumSchema), _count: z.union([ z.literal(true), ListasCountAggregateInputObjectSchema ]).optional(), _min: ListasMinAggregateInputObjectSchema.optional(), _max: ListasMaxAggregateInputObjectSchema.optional(), _avg: ListasAvgAggregateInputObjectSchema.optional(), _sum: ListasSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListasGroupByArgs>;

export const ListasGroupByZodSchema = z.object({ where: ListasWhereInputObjectSchema.optional(), orderBy: z.union([ListasOrderByWithAggregationInputObjectSchema, ListasOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ListasScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ListasScalarFieldEnumSchema), _count: z.union([ z.literal(true), ListasCountAggregateInputObjectSchema ]).optional(), _min: ListasMinAggregateInputObjectSchema.optional(), _max: ListasMaxAggregateInputObjectSchema.optional(), _avg: ListasAvgAggregateInputObjectSchema.optional(), _sum: ListasSumAggregateInputObjectSchema.optional() }).strict();