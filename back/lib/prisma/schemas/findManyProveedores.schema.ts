import type { Prisma } from '../client';
import * as z from 'zod';
import { ProveedoresIncludeObjectSchema as ProveedoresIncludeObjectSchema } from './objects/ProveedoresInclude.schema';
import { ProveedoresOrderByWithRelationInputObjectSchema as ProveedoresOrderByWithRelationInputObjectSchema } from './objects/ProveedoresOrderByWithRelationInput.schema';
import { ProveedoresWhereInputObjectSchema as ProveedoresWhereInputObjectSchema } from './objects/ProveedoresWhereInput.schema';
import { ProveedoresWhereUniqueInputObjectSchema as ProveedoresWhereUniqueInputObjectSchema } from './objects/ProveedoresWhereUniqueInput.schema';
import { ProveedoresScalarFieldEnumSchema } from './enums/ProveedoresScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProveedoresFindManySelectSchema: z.ZodType<Prisma.ProveedoresSelect> = z.object({
    idProveedor: z.boolean().optional(),
    nombre: z.boolean().optional(),
    email: z.boolean().optional(),
    calle: z.boolean().optional(),
    numero: z.boolean().optional(),
    ciudad: z.boolean().optional(),
    provincia: z.boolean().optional(),
    codigoPostal: z.boolean().optional(),
    pais: z.boolean().optional(),
    contacto: z.boolean().optional(),
    activo: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    empresa: z.boolean().optional(),
    listas: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProveedoresSelect>;

export const ProveedoresFindManySelectZodSchema = z.object({
    idProveedor: z.boolean().optional(),
    nombre: z.boolean().optional(),
    email: z.boolean().optional(),
    calle: z.boolean().optional(),
    numero: z.boolean().optional(),
    ciudad: z.boolean().optional(),
    provincia: z.boolean().optional(),
    codigoPostal: z.boolean().optional(),
    pais: z.boolean().optional(),
    contacto: z.boolean().optional(),
    activo: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    empresa: z.boolean().optional(),
    listas: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProveedoresFindManySchema: z.ZodType<Prisma.ProveedoresFindManyArgs> = z.object({ select: ProveedoresFindManySelectSchema.optional(), include: z.lazy(() => ProveedoresIncludeObjectSchema.optional()), orderBy: z.union([ProveedoresOrderByWithRelationInputObjectSchema, ProveedoresOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProveedoresWhereInputObjectSchema.optional(), cursor: ProveedoresWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProveedoresScalarFieldEnumSchema, ProveedoresScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProveedoresFindManyArgs>;

export const ProveedoresFindManyZodSchema = z.object({ select: ProveedoresFindManySelectSchema.optional(), include: z.lazy(() => ProveedoresIncludeObjectSchema.optional()), orderBy: z.union([ProveedoresOrderByWithRelationInputObjectSchema, ProveedoresOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProveedoresWhereInputObjectSchema.optional(), cursor: ProveedoresWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProveedoresScalarFieldEnumSchema, ProveedoresScalarFieldEnumSchema.array()]).optional() }).strict();