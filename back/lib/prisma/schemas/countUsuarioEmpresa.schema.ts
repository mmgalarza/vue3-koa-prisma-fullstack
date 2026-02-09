import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuarioEmpresaOrderByWithRelationInputObjectSchema as UsuarioEmpresaOrderByWithRelationInputObjectSchema } from './objects/UsuarioEmpresaOrderByWithRelationInput.schema';
import { UsuarioEmpresaWhereInputObjectSchema as UsuarioEmpresaWhereInputObjectSchema } from './objects/UsuarioEmpresaWhereInput.schema';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './objects/UsuarioEmpresaWhereUniqueInput.schema';
import { UsuarioEmpresaCountAggregateInputObjectSchema as UsuarioEmpresaCountAggregateInputObjectSchema } from './objects/UsuarioEmpresaCountAggregateInput.schema';

export const UsuarioEmpresaCountSchema: z.ZodType<Prisma.UsuarioEmpresaCountArgs> = z.object({ orderBy: z.union([UsuarioEmpresaOrderByWithRelationInputObjectSchema, UsuarioEmpresaOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuarioEmpresaWhereInputObjectSchema.optional(), cursor: UsuarioEmpresaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UsuarioEmpresaCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioEmpresaCountArgs>;

export const UsuarioEmpresaCountZodSchema = z.object({ orderBy: z.union([UsuarioEmpresaOrderByWithRelationInputObjectSchema, UsuarioEmpresaOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuarioEmpresaWhereInputObjectSchema.optional(), cursor: UsuarioEmpresaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UsuarioEmpresaCountAggregateInputObjectSchema ]).optional() }).strict();