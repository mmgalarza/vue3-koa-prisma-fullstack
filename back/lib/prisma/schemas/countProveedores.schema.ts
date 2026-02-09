import type { Prisma } from '../client';
import * as z from 'zod';
import { ProveedoresOrderByWithRelationInputObjectSchema as ProveedoresOrderByWithRelationInputObjectSchema } from './objects/ProveedoresOrderByWithRelationInput.schema';
import { ProveedoresWhereInputObjectSchema as ProveedoresWhereInputObjectSchema } from './objects/ProveedoresWhereInput.schema';
import { ProveedoresWhereUniqueInputObjectSchema as ProveedoresWhereUniqueInputObjectSchema } from './objects/ProveedoresWhereUniqueInput.schema';
import { ProveedoresCountAggregateInputObjectSchema as ProveedoresCountAggregateInputObjectSchema } from './objects/ProveedoresCountAggregateInput.schema';

export const ProveedoresCountSchema: z.ZodType<Prisma.ProveedoresCountArgs> = z.object({ orderBy: z.union([ProveedoresOrderByWithRelationInputObjectSchema, ProveedoresOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProveedoresWhereInputObjectSchema.optional(), cursor: ProveedoresWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProveedoresCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProveedoresCountArgs>;

export const ProveedoresCountZodSchema = z.object({ orderBy: z.union([ProveedoresOrderByWithRelationInputObjectSchema, ProveedoresOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProveedoresWhereInputObjectSchema.optional(), cursor: ProveedoresWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProveedoresCountAggregateInputObjectSchema ]).optional() }).strict();