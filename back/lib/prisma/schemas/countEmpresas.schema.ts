import type { Prisma } from '../client';
import * as z from 'zod';
import { EmpresasOrderByWithRelationInputObjectSchema as EmpresasOrderByWithRelationInputObjectSchema } from './objects/EmpresasOrderByWithRelationInput.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './objects/EmpresasWhereInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './objects/EmpresasWhereUniqueInput.schema';
import { EmpresasCountAggregateInputObjectSchema as EmpresasCountAggregateInputObjectSchema } from './objects/EmpresasCountAggregateInput.schema';

export const EmpresasCountSchema: z.ZodType<Prisma.EmpresasCountArgs> = z.object({ orderBy: z.union([EmpresasOrderByWithRelationInputObjectSchema, EmpresasOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmpresasWhereInputObjectSchema.optional(), cursor: EmpresasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EmpresasCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EmpresasCountArgs>;

export const EmpresasCountZodSchema = z.object({ orderBy: z.union([EmpresasOrderByWithRelationInputObjectSchema, EmpresasOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmpresasWhereInputObjectSchema.optional(), cursor: EmpresasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EmpresasCountAggregateInputObjectSchema ]).optional() }).strict();