import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuariosOrderByWithRelationInputObjectSchema as UsuariosOrderByWithRelationInputObjectSchema } from './objects/UsuariosOrderByWithRelationInput.schema';
import { UsuariosWhereInputObjectSchema as UsuariosWhereInputObjectSchema } from './objects/UsuariosWhereInput.schema';
import { UsuariosWhereUniqueInputObjectSchema as UsuariosWhereUniqueInputObjectSchema } from './objects/UsuariosWhereUniqueInput.schema';
import { UsuariosCountAggregateInputObjectSchema as UsuariosCountAggregateInputObjectSchema } from './objects/UsuariosCountAggregateInput.schema';

export const UsuariosCountSchema: z.ZodType<Prisma.UsuariosCountArgs> = z.object({ orderBy: z.union([UsuariosOrderByWithRelationInputObjectSchema, UsuariosOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuariosWhereInputObjectSchema.optional(), cursor: UsuariosWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UsuariosCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UsuariosCountArgs>;

export const UsuariosCountZodSchema = z.object({ orderBy: z.union([UsuariosOrderByWithRelationInputObjectSchema, UsuariosOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuariosWhereInputObjectSchema.optional(), cursor: UsuariosWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UsuariosCountAggregateInputObjectSchema ]).optional() }).strict();