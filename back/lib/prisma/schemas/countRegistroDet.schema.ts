import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroDetOrderByWithRelationInputObjectSchema as RegistroDetOrderByWithRelationInputObjectSchema } from './objects/RegistroDetOrderByWithRelationInput.schema';
import { RegistroDetWhereInputObjectSchema as RegistroDetWhereInputObjectSchema } from './objects/RegistroDetWhereInput.schema';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './objects/RegistroDetWhereUniqueInput.schema';
import { RegistroDetCountAggregateInputObjectSchema as RegistroDetCountAggregateInputObjectSchema } from './objects/RegistroDetCountAggregateInput.schema';

export const RegistroDetCountSchema: z.ZodType<Prisma.RegistroDetCountArgs> = z.object({ orderBy: z.union([RegistroDetOrderByWithRelationInputObjectSchema, RegistroDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistroDetWhereInputObjectSchema.optional(), cursor: RegistroDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RegistroDetCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RegistroDetCountArgs>;

export const RegistroDetCountZodSchema = z.object({ orderBy: z.union([RegistroDetOrderByWithRelationInputObjectSchema, RegistroDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistroDetWhereInputObjectSchema.optional(), cursor: RegistroDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RegistroDetCountAggregateInputObjectSchema ]).optional() }).strict();