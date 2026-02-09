import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaOrderByWithRelationInputObjectSchema as FacturaOrderByWithRelationInputObjectSchema } from './objects/FacturaOrderByWithRelationInput.schema';
import { FacturaWhereInputObjectSchema as FacturaWhereInputObjectSchema } from './objects/FacturaWhereInput.schema';
import { FacturaWhereUniqueInputObjectSchema as FacturaWhereUniqueInputObjectSchema } from './objects/FacturaWhereUniqueInput.schema';
import { FacturaCountAggregateInputObjectSchema as FacturaCountAggregateInputObjectSchema } from './objects/FacturaCountAggregateInput.schema';
import { FacturaMinAggregateInputObjectSchema as FacturaMinAggregateInputObjectSchema } from './objects/FacturaMinAggregateInput.schema';
import { FacturaMaxAggregateInputObjectSchema as FacturaMaxAggregateInputObjectSchema } from './objects/FacturaMaxAggregateInput.schema';
import { FacturaAvgAggregateInputObjectSchema as FacturaAvgAggregateInputObjectSchema } from './objects/FacturaAvgAggregateInput.schema';
import { FacturaSumAggregateInputObjectSchema as FacturaSumAggregateInputObjectSchema } from './objects/FacturaSumAggregateInput.schema';

export const FacturaAggregateSchema: z.ZodType<Prisma.FacturaAggregateArgs> = z.object({ orderBy: z.union([FacturaOrderByWithRelationInputObjectSchema, FacturaOrderByWithRelationInputObjectSchema.array()]).optional(), where: FacturaWhereInputObjectSchema.optional(), cursor: FacturaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FacturaCountAggregateInputObjectSchema ]).optional(), _min: FacturaMinAggregateInputObjectSchema.optional(), _max: FacturaMaxAggregateInputObjectSchema.optional(), _avg: FacturaAvgAggregateInputObjectSchema.optional(), _sum: FacturaSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FacturaAggregateArgs>;

export const FacturaAggregateZodSchema = z.object({ orderBy: z.union([FacturaOrderByWithRelationInputObjectSchema, FacturaOrderByWithRelationInputObjectSchema.array()]).optional(), where: FacturaWhereInputObjectSchema.optional(), cursor: FacturaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FacturaCountAggregateInputObjectSchema ]).optional(), _min: FacturaMinAggregateInputObjectSchema.optional(), _max: FacturaMaxAggregateInputObjectSchema.optional(), _avg: FacturaAvgAggregateInputObjectSchema.optional(), _sum: FacturaSumAggregateInputObjectSchema.optional() }).strict();