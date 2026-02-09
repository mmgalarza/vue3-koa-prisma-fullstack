import type { Prisma } from '../client';
import * as z from 'zod';
import { ActividadOrderByWithRelationInputObjectSchema as ActividadOrderByWithRelationInputObjectSchema } from './objects/ActividadOrderByWithRelationInput.schema';
import { ActividadWhereInputObjectSchema as ActividadWhereInputObjectSchema } from './objects/ActividadWhereInput.schema';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './objects/ActividadWhereUniqueInput.schema';
import { ActividadCountAggregateInputObjectSchema as ActividadCountAggregateInputObjectSchema } from './objects/ActividadCountAggregateInput.schema';

export const ActividadCountSchema: z.ZodType<Prisma.ActividadCountArgs> = z.object({ orderBy: z.union([ActividadOrderByWithRelationInputObjectSchema, ActividadOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActividadWhereInputObjectSchema.optional(), cursor: ActividadWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ActividadCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ActividadCountArgs>;

export const ActividadCountZodSchema = z.object({ orderBy: z.union([ActividadOrderByWithRelationInputObjectSchema, ActividadOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActividadWhereInputObjectSchema.optional(), cursor: ActividadWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ActividadCountAggregateInputObjectSchema ]).optional() }).strict();