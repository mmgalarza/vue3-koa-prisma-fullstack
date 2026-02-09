import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaOrderByWithRelationInputObjectSchema as VentaOrderByWithRelationInputObjectSchema } from './objects/VentaOrderByWithRelationInput.schema';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './objects/VentaWhereInput.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './objects/VentaWhereUniqueInput.schema';
import { VentaCountAggregateInputObjectSchema as VentaCountAggregateInputObjectSchema } from './objects/VentaCountAggregateInput.schema';
import { VentaMinAggregateInputObjectSchema as VentaMinAggregateInputObjectSchema } from './objects/VentaMinAggregateInput.schema';
import { VentaMaxAggregateInputObjectSchema as VentaMaxAggregateInputObjectSchema } from './objects/VentaMaxAggregateInput.schema';
import { VentaAvgAggregateInputObjectSchema as VentaAvgAggregateInputObjectSchema } from './objects/VentaAvgAggregateInput.schema';
import { VentaSumAggregateInputObjectSchema as VentaSumAggregateInputObjectSchema } from './objects/VentaSumAggregateInput.schema';

export const VentaAggregateSchema: z.ZodType<Prisma.VentaAggregateArgs> = z.object({ orderBy: z.union([VentaOrderByWithRelationInputObjectSchema, VentaOrderByWithRelationInputObjectSchema.array()]).optional(), where: VentaWhereInputObjectSchema.optional(), cursor: VentaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), VentaCountAggregateInputObjectSchema ]).optional(), _min: VentaMinAggregateInputObjectSchema.optional(), _max: VentaMaxAggregateInputObjectSchema.optional(), _avg: VentaAvgAggregateInputObjectSchema.optional(), _sum: VentaSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VentaAggregateArgs>;

export const VentaAggregateZodSchema = z.object({ orderBy: z.union([VentaOrderByWithRelationInputObjectSchema, VentaOrderByWithRelationInputObjectSchema.array()]).optional(), where: VentaWhereInputObjectSchema.optional(), cursor: VentaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), VentaCountAggregateInputObjectSchema ]).optional(), _min: VentaMinAggregateInputObjectSchema.optional(), _max: VentaMaxAggregateInputObjectSchema.optional(), _avg: VentaAvgAggregateInputObjectSchema.optional(), _sum: VentaSumAggregateInputObjectSchema.optional() }).strict();