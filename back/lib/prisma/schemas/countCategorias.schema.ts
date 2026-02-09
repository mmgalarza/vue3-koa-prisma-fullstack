import type { Prisma } from '../client';
import * as z from 'zod';
import { CategoriasOrderByWithRelationInputObjectSchema as CategoriasOrderByWithRelationInputObjectSchema } from './objects/CategoriasOrderByWithRelationInput.schema';
import { CategoriasWhereInputObjectSchema as CategoriasWhereInputObjectSchema } from './objects/CategoriasWhereInput.schema';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './objects/CategoriasWhereUniqueInput.schema';
import { CategoriasCountAggregateInputObjectSchema as CategoriasCountAggregateInputObjectSchema } from './objects/CategoriasCountAggregateInput.schema';

export const CategoriasCountSchema: z.ZodType<Prisma.CategoriasCountArgs> = z.object({ orderBy: z.union([CategoriasOrderByWithRelationInputObjectSchema, CategoriasOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoriasWhereInputObjectSchema.optional(), cursor: CategoriasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CategoriasCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CategoriasCountArgs>;

export const CategoriasCountZodSchema = z.object({ orderBy: z.union([CategoriasOrderByWithRelationInputObjectSchema, CategoriasOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoriasWhereInputObjectSchema.optional(), cursor: CategoriasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CategoriasCountAggregateInputObjectSchema ]).optional() }).strict();