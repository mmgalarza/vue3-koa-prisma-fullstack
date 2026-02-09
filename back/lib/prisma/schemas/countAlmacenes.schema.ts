import type { Prisma } from '../client';
import * as z from 'zod';
import { AlmacenesOrderByWithRelationInputObjectSchema as AlmacenesOrderByWithRelationInputObjectSchema } from './objects/AlmacenesOrderByWithRelationInput.schema';
import { AlmacenesWhereInputObjectSchema as AlmacenesWhereInputObjectSchema } from './objects/AlmacenesWhereInput.schema';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './objects/AlmacenesWhereUniqueInput.schema';
import { AlmacenesCountAggregateInputObjectSchema as AlmacenesCountAggregateInputObjectSchema } from './objects/AlmacenesCountAggregateInput.schema';

export const AlmacenesCountSchema: z.ZodType<Prisma.AlmacenesCountArgs> = z.object({ orderBy: z.union([AlmacenesOrderByWithRelationInputObjectSchema, AlmacenesOrderByWithRelationInputObjectSchema.array()]).optional(), where: AlmacenesWhereInputObjectSchema.optional(), cursor: AlmacenesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AlmacenesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AlmacenesCountArgs>;

export const AlmacenesCountZodSchema = z.object({ orderBy: z.union([AlmacenesOrderByWithRelationInputObjectSchema, AlmacenesOrderByWithRelationInputObjectSchema.array()]).optional(), where: AlmacenesWhereInputObjectSchema.optional(), cursor: AlmacenesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AlmacenesCountAggregateInputObjectSchema ]).optional() }).strict();