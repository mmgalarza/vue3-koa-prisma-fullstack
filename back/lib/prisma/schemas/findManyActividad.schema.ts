import type { Prisma } from '../client';
import * as z from 'zod';
import { ActividadIncludeObjectSchema as ActividadIncludeObjectSchema } from './objects/ActividadInclude.schema';
import { ActividadOrderByWithRelationInputObjectSchema as ActividadOrderByWithRelationInputObjectSchema } from './objects/ActividadOrderByWithRelationInput.schema';
import { ActividadWhereInputObjectSchema as ActividadWhereInputObjectSchema } from './objects/ActividadWhereInput.schema';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './objects/ActividadWhereUniqueInput.schema';
import { ActividadScalarFieldEnumSchema } from './enums/ActividadScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ActividadFindManySelectSchema: z.ZodType<Prisma.ActividadSelect> = z.object({
    idActividad: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    nombre: z.boolean().optional(),
    inicio: z.boolean().optional(),
    fin: z.boolean().optional(),
    estado: z.boolean().optional(),
    activa: z.boolean().optional(),
    empresa: z.boolean().optional(),
    registros: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ActividadSelect>;

export const ActividadFindManySelectZodSchema = z.object({
    idActividad: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    nombre: z.boolean().optional(),
    inicio: z.boolean().optional(),
    fin: z.boolean().optional(),
    estado: z.boolean().optional(),
    activa: z.boolean().optional(),
    empresa: z.boolean().optional(),
    registros: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ActividadFindManySchema: z.ZodType<Prisma.ActividadFindManyArgs> = z.object({ select: ActividadFindManySelectSchema.optional(), include: z.lazy(() => ActividadIncludeObjectSchema.optional()), orderBy: z.union([ActividadOrderByWithRelationInputObjectSchema, ActividadOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActividadWhereInputObjectSchema.optional(), cursor: ActividadWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActividadScalarFieldEnumSchema, ActividadScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ActividadFindManyArgs>;

export const ActividadFindManyZodSchema = z.object({ select: ActividadFindManySelectSchema.optional(), include: z.lazy(() => ActividadIncludeObjectSchema.optional()), orderBy: z.union([ActividadOrderByWithRelationInputObjectSchema, ActividadOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActividadWhereInputObjectSchema.optional(), cursor: ActividadWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActividadScalarFieldEnumSchema, ActividadScalarFieldEnumSchema.array()]).optional() }).strict();