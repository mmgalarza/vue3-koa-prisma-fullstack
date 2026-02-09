import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpIncludeObjectSchema as ListaPvpIncludeObjectSchema } from './objects/ListaPvpInclude.schema';
import { ListaPvpOrderByWithRelationInputObjectSchema as ListaPvpOrderByWithRelationInputObjectSchema } from './objects/ListaPvpOrderByWithRelationInput.schema';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './objects/ListaPvpWhereInput.schema';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './objects/ListaPvpWhereUniqueInput.schema';
import { ListaPvpScalarFieldEnumSchema } from './enums/ListaPvpScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ListaPvpFindFirstSelectSchema: z.ZodType<Prisma.ListaPvpSelect> = z.object({
    idListaPvp: z.boolean().optional(),
    nombre: z.boolean().optional(),
    criterio: z.boolean().optional(),
    fechaGen: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    empresa: z.boolean().optional(),
    detalles: z.boolean().optional(),
    ventas: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ListaPvpSelect>;

export const ListaPvpFindFirstSelectZodSchema = z.object({
    idListaPvp: z.boolean().optional(),
    nombre: z.boolean().optional(),
    criterio: z.boolean().optional(),
    fechaGen: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    empresa: z.boolean().optional(),
    detalles: z.boolean().optional(),
    ventas: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ListaPvpFindFirstSchema: z.ZodType<Prisma.ListaPvpFindFirstArgs> = z.object({ select: ListaPvpFindFirstSelectSchema.optional(), include: z.lazy(() => ListaPvpIncludeObjectSchema.optional()), orderBy: z.union([ListaPvpOrderByWithRelationInputObjectSchema, ListaPvpOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListaPvpWhereInputObjectSchema.optional(), cursor: ListaPvpWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ListaPvpScalarFieldEnumSchema, ListaPvpScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpFindFirstArgs>;

export const ListaPvpFindFirstZodSchema = z.object({ select: ListaPvpFindFirstSelectSchema.optional(), include: z.lazy(() => ListaPvpIncludeObjectSchema.optional()), orderBy: z.union([ListaPvpOrderByWithRelationInputObjectSchema, ListaPvpOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListaPvpWhereInputObjectSchema.optional(), cursor: ListaPvpWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ListaPvpScalarFieldEnumSchema, ListaPvpScalarFieldEnumSchema.array()]).optional() }).strict();