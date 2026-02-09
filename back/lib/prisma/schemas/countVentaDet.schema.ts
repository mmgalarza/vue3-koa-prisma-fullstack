import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaDetOrderByWithRelationInputObjectSchema as VentaDetOrderByWithRelationInputObjectSchema } from './objects/VentaDetOrderByWithRelationInput.schema';
import { VentaDetWhereInputObjectSchema as VentaDetWhereInputObjectSchema } from './objects/VentaDetWhereInput.schema';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './objects/VentaDetWhereUniqueInput.schema';
import { VentaDetCountAggregateInputObjectSchema as VentaDetCountAggregateInputObjectSchema } from './objects/VentaDetCountAggregateInput.schema';

export const VentaDetCountSchema: z.ZodType<Prisma.VentaDetCountArgs> = z.object({ orderBy: z.union([VentaDetOrderByWithRelationInputObjectSchema, VentaDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: VentaDetWhereInputObjectSchema.optional(), cursor: VentaDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VentaDetCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.VentaDetCountArgs>;

export const VentaDetCountZodSchema = z.object({ orderBy: z.union([VentaDetOrderByWithRelationInputObjectSchema, VentaDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: VentaDetWhereInputObjectSchema.optional(), cursor: VentaDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VentaDetCountAggregateInputObjectSchema ]).optional() }).strict();