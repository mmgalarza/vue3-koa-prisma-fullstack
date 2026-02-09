import type { Prisma } from '../client';
import * as z from 'zod';
import { AlmacenesIncludeObjectSchema as AlmacenesIncludeObjectSchema } from './objects/AlmacenesInclude.schema';
import { AlmacenesOrderByWithRelationInputObjectSchema as AlmacenesOrderByWithRelationInputObjectSchema } from './objects/AlmacenesOrderByWithRelationInput.schema';
import { AlmacenesWhereInputObjectSchema as AlmacenesWhereInputObjectSchema } from './objects/AlmacenesWhereInput.schema';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './objects/AlmacenesWhereUniqueInput.schema';
import { AlmacenesScalarFieldEnumSchema } from './enums/AlmacenesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AlmacenesFindManySelectSchema: z.ZodType<Prisma.AlmacenesSelect> = z.object({
    idAlmacen: z.boolean().optional(),
    nombre: z.boolean().optional(),
    interno: z.boolean().optional(),
    calle: z.boolean().optional(),
    numero: z.boolean().optional(),
    ciudad: z.boolean().optional(),
    provincia: z.boolean().optional(),
    codigoPostal: z.boolean().optional(),
    pais: z.boolean().optional(),
    responsable: z.boolean().optional(),
    activo: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    empresa: z.boolean().optional(),
    registrosDet: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AlmacenesSelect>;

export const AlmacenesFindManySelectZodSchema = z.object({
    idAlmacen: z.boolean().optional(),
    nombre: z.boolean().optional(),
    interno: z.boolean().optional(),
    calle: z.boolean().optional(),
    numero: z.boolean().optional(),
    ciudad: z.boolean().optional(),
    provincia: z.boolean().optional(),
    codigoPostal: z.boolean().optional(),
    pais: z.boolean().optional(),
    responsable: z.boolean().optional(),
    activo: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    empresa: z.boolean().optional(),
    registrosDet: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const AlmacenesFindManySchema: z.ZodType<Prisma.AlmacenesFindManyArgs> = z.object({ select: AlmacenesFindManySelectSchema.optional(), include: z.lazy(() => AlmacenesIncludeObjectSchema.optional()), orderBy: z.union([AlmacenesOrderByWithRelationInputObjectSchema, AlmacenesOrderByWithRelationInputObjectSchema.array()]).optional(), where: AlmacenesWhereInputObjectSchema.optional(), cursor: AlmacenesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AlmacenesScalarFieldEnumSchema, AlmacenesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AlmacenesFindManyArgs>;

export const AlmacenesFindManyZodSchema = z.object({ select: AlmacenesFindManySelectSchema.optional(), include: z.lazy(() => AlmacenesIncludeObjectSchema.optional()), orderBy: z.union([AlmacenesOrderByWithRelationInputObjectSchema, AlmacenesOrderByWithRelationInputObjectSchema.array()]).optional(), where: AlmacenesWhereInputObjectSchema.optional(), cursor: AlmacenesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AlmacenesScalarFieldEnumSchema, AlmacenesScalarFieldEnumSchema.array()]).optional() }).strict();