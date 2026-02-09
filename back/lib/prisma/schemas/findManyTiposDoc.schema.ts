import type { Prisma } from '../client';
import * as z from 'zod';
import { TiposDocIncludeObjectSchema as TiposDocIncludeObjectSchema } from './objects/TiposDocInclude.schema';
import { TiposDocOrderByWithRelationInputObjectSchema as TiposDocOrderByWithRelationInputObjectSchema } from './objects/TiposDocOrderByWithRelationInput.schema';
import { TiposDocWhereInputObjectSchema as TiposDocWhereInputObjectSchema } from './objects/TiposDocWhereInput.schema';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './objects/TiposDocWhereUniqueInput.schema';
import { TiposDocScalarFieldEnumSchema } from './enums/TiposDocScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TiposDocFindManySelectSchema: z.ZodType<Prisma.TiposDocSelect> = z.object({
    idTipoDoc: z.boolean().optional(),
    nombre: z.boolean().optional(),
    movAlmacen: z.boolean().optional(),
    idTalon: z.boolean().optional(),
    talonario: z.boolean().optional(),
    registros: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TiposDocSelect>;

export const TiposDocFindManySelectZodSchema = z.object({
    idTipoDoc: z.boolean().optional(),
    nombre: z.boolean().optional(),
    movAlmacen: z.boolean().optional(),
    idTalon: z.boolean().optional(),
    talonario: z.boolean().optional(),
    registros: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TiposDocFindManySchema: z.ZodType<Prisma.TiposDocFindManyArgs> = z.object({ select: TiposDocFindManySelectSchema.optional(), include: z.lazy(() => TiposDocIncludeObjectSchema.optional()), orderBy: z.union([TiposDocOrderByWithRelationInputObjectSchema, TiposDocOrderByWithRelationInputObjectSchema.array()]).optional(), where: TiposDocWhereInputObjectSchema.optional(), cursor: TiposDocWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TiposDocScalarFieldEnumSchema, TiposDocScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TiposDocFindManyArgs>;

export const TiposDocFindManyZodSchema = z.object({ select: TiposDocFindManySelectSchema.optional(), include: z.lazy(() => TiposDocIncludeObjectSchema.optional()), orderBy: z.union([TiposDocOrderByWithRelationInputObjectSchema, TiposDocOrderByWithRelationInputObjectSchema.array()]).optional(), where: TiposDocWhereInputObjectSchema.optional(), cursor: TiposDocWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TiposDocScalarFieldEnumSchema, TiposDocScalarFieldEnumSchema.array()]).optional() }).strict();