import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientesOrderByWithRelationInputObjectSchema as ClientesOrderByWithRelationInputObjectSchema } from './objects/ClientesOrderByWithRelationInput.schema';
import { ClientesWhereInputObjectSchema as ClientesWhereInputObjectSchema } from './objects/ClientesWhereInput.schema';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './objects/ClientesWhereUniqueInput.schema';
import { ClientesCountAggregateInputObjectSchema as ClientesCountAggregateInputObjectSchema } from './objects/ClientesCountAggregateInput.schema';

export const ClientesCountSchema: z.ZodType<Prisma.ClientesCountArgs> = z.object({ orderBy: z.union([ClientesOrderByWithRelationInputObjectSchema, ClientesOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientesWhereInputObjectSchema.optional(), cursor: ClientesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClientesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ClientesCountArgs>;

export const ClientesCountZodSchema = z.object({ orderBy: z.union([ClientesOrderByWithRelationInputObjectSchema, ClientesOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientesWhereInputObjectSchema.optional(), cursor: ClientesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClientesCountAggregateInputObjectSchema ]).optional() }).strict();