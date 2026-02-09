import type { Prisma } from '../client';
import * as z from 'zod';
import { ProductosIncludeObjectSchema as ProductosIncludeObjectSchema } from './objects/ProductosInclude.schema';
import { ProductosOrderByWithRelationInputObjectSchema as ProductosOrderByWithRelationInputObjectSchema } from './objects/ProductosOrderByWithRelationInput.schema';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './objects/ProductosWhereInput.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './objects/ProductosWhereUniqueInput.schema';
import { ProductosScalarFieldEnumSchema } from './enums/ProductosScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductosFindManySelectSchema: z.ZodType<Prisma.ProductosSelect> = z.object({
    idProducto: z.boolean().optional(),
    nombre: z.boolean().optional(),
    idCategoria: z.boolean().optional(),
    descripcion: z.boolean().optional(),
    imagen: z.boolean().optional(),
    codigo: z.boolean().optional(),
    unidad: z.boolean().optional(),
    activo: z.boolean().optional(),
    categoria: z.boolean().optional(),
    listasDet: z.boolean().optional(),
    listaPvpDet: z.boolean().optional(),
    ventaDet: z.boolean().optional(),
    registroDet: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductosSelect>;

export const ProductosFindManySelectZodSchema = z.object({
    idProducto: z.boolean().optional(),
    nombre: z.boolean().optional(),
    idCategoria: z.boolean().optional(),
    descripcion: z.boolean().optional(),
    imagen: z.boolean().optional(),
    codigo: z.boolean().optional(),
    unidad: z.boolean().optional(),
    activo: z.boolean().optional(),
    categoria: z.boolean().optional(),
    listasDet: z.boolean().optional(),
    listaPvpDet: z.boolean().optional(),
    ventaDet: z.boolean().optional(),
    registroDet: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProductosFindManySchema: z.ZodType<Prisma.ProductosFindManyArgs> = z.object({ select: ProductosFindManySelectSchema.optional(), include: z.lazy(() => ProductosIncludeObjectSchema.optional()), orderBy: z.union([ProductosOrderByWithRelationInputObjectSchema, ProductosOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductosWhereInputObjectSchema.optional(), cursor: ProductosWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductosScalarFieldEnumSchema, ProductosScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductosFindManyArgs>;

export const ProductosFindManyZodSchema = z.object({ select: ProductosFindManySelectSchema.optional(), include: z.lazy(() => ProductosIncludeObjectSchema.optional()), orderBy: z.union([ProductosOrderByWithRelationInputObjectSchema, ProductosOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductosWhereInputObjectSchema.optional(), cursor: ProductosWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductosScalarFieldEnumSchema, ProductosScalarFieldEnumSchema.array()]).optional() }).strict();