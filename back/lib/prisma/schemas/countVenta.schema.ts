import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaOrderByWithRelationInputObjectSchema as VentaOrderByWithRelationInputObjectSchema } from './objects/VentaOrderByWithRelationInput.schema';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './objects/VentaWhereInput.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './objects/VentaWhereUniqueInput.schema';
import { VentaCountAggregateInputObjectSchema as VentaCountAggregateInputObjectSchema } from './objects/VentaCountAggregateInput.schema';

export const VentaCountSchema: z.ZodType<Prisma.VentaCountArgs> = z.object({ orderBy: z.union([VentaOrderByWithRelationInputObjectSchema, VentaOrderByWithRelationInputObjectSchema.array()]).optional(), where: VentaWhereInputObjectSchema.optional(), cursor: VentaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VentaCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.VentaCountArgs>;

export const VentaCountZodSchema = z.object({ orderBy: z.union([VentaOrderByWithRelationInputObjectSchema, VentaOrderByWithRelationInputObjectSchema.array()]).optional(), where: VentaWhereInputObjectSchema.optional(), cursor: VentaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VentaCountAggregateInputObjectSchema ]).optional() }).strict();