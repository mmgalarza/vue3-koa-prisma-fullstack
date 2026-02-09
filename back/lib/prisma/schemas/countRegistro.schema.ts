import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroOrderByWithRelationInputObjectSchema as RegistroOrderByWithRelationInputObjectSchema } from './objects/RegistroOrderByWithRelationInput.schema';
import { RegistroWhereInputObjectSchema as RegistroWhereInputObjectSchema } from './objects/RegistroWhereInput.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './objects/RegistroWhereUniqueInput.schema';
import { RegistroCountAggregateInputObjectSchema as RegistroCountAggregateInputObjectSchema } from './objects/RegistroCountAggregateInput.schema';

export const RegistroCountSchema: z.ZodType<Prisma.RegistroCountArgs> = z.object({ orderBy: z.union([RegistroOrderByWithRelationInputObjectSchema, RegistroOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistroWhereInputObjectSchema.optional(), cursor: RegistroWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RegistroCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RegistroCountArgs>;

export const RegistroCountZodSchema = z.object({ orderBy: z.union([RegistroOrderByWithRelationInputObjectSchema, RegistroOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistroWhereInputObjectSchema.optional(), cursor: RegistroWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RegistroCountAggregateInputObjectSchema ]).optional() }).strict();