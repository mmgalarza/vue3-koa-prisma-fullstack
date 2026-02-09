import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './objects/VentaWhereInput.schema';
import { VentaOrderByWithAggregationInputObjectSchema as VentaOrderByWithAggregationInputObjectSchema } from './objects/VentaOrderByWithAggregationInput.schema';
import { VentaScalarWhereWithAggregatesInputObjectSchema as VentaScalarWhereWithAggregatesInputObjectSchema } from './objects/VentaScalarWhereWithAggregatesInput.schema';
import { VentaScalarFieldEnumSchema } from './enums/VentaScalarFieldEnum.schema';
import { VentaCountAggregateInputObjectSchema as VentaCountAggregateInputObjectSchema } from './objects/VentaCountAggregateInput.schema';
import { VentaMinAggregateInputObjectSchema as VentaMinAggregateInputObjectSchema } from './objects/VentaMinAggregateInput.schema';
import { VentaMaxAggregateInputObjectSchema as VentaMaxAggregateInputObjectSchema } from './objects/VentaMaxAggregateInput.schema';
import { VentaAvgAggregateInputObjectSchema as VentaAvgAggregateInputObjectSchema } from './objects/VentaAvgAggregateInput.schema';
import { VentaSumAggregateInputObjectSchema as VentaSumAggregateInputObjectSchema } from './objects/VentaSumAggregateInput.schema';

export const VentaGroupBySchema: z.ZodType<Prisma.VentaGroupByArgs> = z.object({ where: VentaWhereInputObjectSchema.optional(), orderBy: z.union([VentaOrderByWithAggregationInputObjectSchema, VentaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: VentaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(VentaScalarFieldEnumSchema), _count: z.union([ z.literal(true), VentaCountAggregateInputObjectSchema ]).optional(), _min: VentaMinAggregateInputObjectSchema.optional(), _max: VentaMaxAggregateInputObjectSchema.optional(), _avg: VentaAvgAggregateInputObjectSchema.optional(), _sum: VentaSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VentaGroupByArgs>;

export const VentaGroupByZodSchema = z.object({ where: VentaWhereInputObjectSchema.optional(), orderBy: z.union([VentaOrderByWithAggregationInputObjectSchema, VentaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: VentaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(VentaScalarFieldEnumSchema), _count: z.union([ z.literal(true), VentaCountAggregateInputObjectSchema ]).optional(), _min: VentaMinAggregateInputObjectSchema.optional(), _max: VentaMaxAggregateInputObjectSchema.optional(), _avg: VentaAvgAggregateInputObjectSchema.optional(), _sum: VentaSumAggregateInputObjectSchema.optional() }).strict();