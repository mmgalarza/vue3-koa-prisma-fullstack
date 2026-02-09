import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaOrderByWithRelationInputObjectSchema as FacturaOrderByWithRelationInputObjectSchema } from './objects/FacturaOrderByWithRelationInput.schema';
import { FacturaWhereInputObjectSchema as FacturaWhereInputObjectSchema } from './objects/FacturaWhereInput.schema';
import { FacturaWhereUniqueInputObjectSchema as FacturaWhereUniqueInputObjectSchema } from './objects/FacturaWhereUniqueInput.schema';
import { FacturaCountAggregateInputObjectSchema as FacturaCountAggregateInputObjectSchema } from './objects/FacturaCountAggregateInput.schema';

export const FacturaCountSchema: z.ZodType<Prisma.FacturaCountArgs> = z.object({ orderBy: z.union([FacturaOrderByWithRelationInputObjectSchema, FacturaOrderByWithRelationInputObjectSchema.array()]).optional(), where: FacturaWhereInputObjectSchema.optional(), cursor: FacturaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FacturaCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.FacturaCountArgs>;

export const FacturaCountZodSchema = z.object({ orderBy: z.union([FacturaOrderByWithRelationInputObjectSchema, FacturaOrderByWithRelationInputObjectSchema.array()]).optional(), where: FacturaWhereInputObjectSchema.optional(), cursor: FacturaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FacturaCountAggregateInputObjectSchema ]).optional() }).strict();