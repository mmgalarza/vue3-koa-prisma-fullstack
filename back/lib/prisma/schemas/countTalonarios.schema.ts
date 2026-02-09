import type { Prisma } from '../client';
import * as z from 'zod';
import { TalonariosOrderByWithRelationInputObjectSchema as TalonariosOrderByWithRelationInputObjectSchema } from './objects/TalonariosOrderByWithRelationInput.schema';
import { TalonariosWhereInputObjectSchema as TalonariosWhereInputObjectSchema } from './objects/TalonariosWhereInput.schema';
import { TalonariosWhereUniqueInputObjectSchema as TalonariosWhereUniqueInputObjectSchema } from './objects/TalonariosWhereUniqueInput.schema';
import { TalonariosCountAggregateInputObjectSchema as TalonariosCountAggregateInputObjectSchema } from './objects/TalonariosCountAggregateInput.schema';

export const TalonariosCountSchema: z.ZodType<Prisma.TalonariosCountArgs> = z.object({ orderBy: z.union([TalonariosOrderByWithRelationInputObjectSchema, TalonariosOrderByWithRelationInputObjectSchema.array()]).optional(), where: TalonariosWhereInputObjectSchema.optional(), cursor: TalonariosWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TalonariosCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TalonariosCountArgs>;

export const TalonariosCountZodSchema = z.object({ orderBy: z.union([TalonariosOrderByWithRelationInputObjectSchema, TalonariosOrderByWithRelationInputObjectSchema.array()]).optional(), where: TalonariosWhereInputObjectSchema.optional(), cursor: TalonariosWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TalonariosCountAggregateInputObjectSchema ]).optional() }).strict();