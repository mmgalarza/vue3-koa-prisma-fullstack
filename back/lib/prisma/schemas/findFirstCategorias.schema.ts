import type { Prisma } from '../client';
import * as z from 'zod';
import { CategoriasIncludeObjectSchema as CategoriasIncludeObjectSchema } from './objects/CategoriasInclude.schema';
import { CategoriasOrderByWithRelationInputObjectSchema as CategoriasOrderByWithRelationInputObjectSchema } from './objects/CategoriasOrderByWithRelationInput.schema';
import { CategoriasWhereInputObjectSchema as CategoriasWhereInputObjectSchema } from './objects/CategoriasWhereInput.schema';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './objects/CategoriasWhereUniqueInput.schema';
import { CategoriasScalarFieldEnumSchema } from './enums/CategoriasScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategoriasFindFirstSelectSchema: z.ZodType<Prisma.CategoriasSelect> = z.object({
    idCategoria: z.boolean().optional(),
    nombre: z.boolean().optional(),
    descripcion: z.boolean().optional(),
    icono: z.boolean().optional(),
    activo: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    empresa: z.boolean().optional(),
    productos: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CategoriasSelect>;

export const CategoriasFindFirstSelectZodSchema = z.object({
    idCategoria: z.boolean().optional(),
    nombre: z.boolean().optional(),
    descripcion: z.boolean().optional(),
    icono: z.boolean().optional(),
    activo: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    empresa: z.boolean().optional(),
    productos: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CategoriasFindFirstSchema: z.ZodType<Prisma.CategoriasFindFirstArgs> = z.object({ select: CategoriasFindFirstSelectSchema.optional(), include: z.lazy(() => CategoriasIncludeObjectSchema.optional()), orderBy: z.union([CategoriasOrderByWithRelationInputObjectSchema, CategoriasOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoriasWhereInputObjectSchema.optional(), cursor: CategoriasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CategoriasScalarFieldEnumSchema, CategoriasScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CategoriasFindFirstArgs>;

export const CategoriasFindFirstZodSchema = z.object({ select: CategoriasFindFirstSelectSchema.optional(), include: z.lazy(() => CategoriasIncludeObjectSchema.optional()), orderBy: z.union([CategoriasOrderByWithRelationInputObjectSchema, CategoriasOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoriasWhereInputObjectSchema.optional(), cursor: CategoriasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CategoriasScalarFieldEnumSchema, CategoriasScalarFieldEnumSchema.array()]).optional() }).strict();