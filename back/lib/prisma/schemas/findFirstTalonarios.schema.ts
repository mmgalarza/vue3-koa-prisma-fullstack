import type { Prisma } from '../client';
import * as z from 'zod';
import { TalonariosIncludeObjectSchema as TalonariosIncludeObjectSchema } from './objects/TalonariosInclude.schema';
import { TalonariosOrderByWithRelationInputObjectSchema as TalonariosOrderByWithRelationInputObjectSchema } from './objects/TalonariosOrderByWithRelationInput.schema';
import { TalonariosWhereInputObjectSchema as TalonariosWhereInputObjectSchema } from './objects/TalonariosWhereInput.schema';
import { TalonariosWhereUniqueInputObjectSchema as TalonariosWhereUniqueInputObjectSchema } from './objects/TalonariosWhereUniqueInput.schema';
import { TalonariosScalarFieldEnumSchema } from './enums/TalonariosScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TalonariosFindFirstSelectSchema: z.ZodType<Prisma.TalonariosSelect> = z.object({
    idTalon: z.boolean().optional(),
    nombre: z.boolean().optional(),
    inicio: z.boolean().optional(),
    fin: z.boolean().optional(),
    actual: z.boolean().optional(),
    tiposDoc: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TalonariosSelect>;

export const TalonariosFindFirstSelectZodSchema = z.object({
    idTalon: z.boolean().optional(),
    nombre: z.boolean().optional(),
    inicio: z.boolean().optional(),
    fin: z.boolean().optional(),
    actual: z.boolean().optional(),
    tiposDoc: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TalonariosFindFirstSchema: z.ZodType<Prisma.TalonariosFindFirstArgs> = z.object({ select: TalonariosFindFirstSelectSchema.optional(), include: z.lazy(() => TalonariosIncludeObjectSchema.optional()), orderBy: z.union([TalonariosOrderByWithRelationInputObjectSchema, TalonariosOrderByWithRelationInputObjectSchema.array()]).optional(), where: TalonariosWhereInputObjectSchema.optional(), cursor: TalonariosWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TalonariosScalarFieldEnumSchema, TalonariosScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TalonariosFindFirstArgs>;

export const TalonariosFindFirstZodSchema = z.object({ select: TalonariosFindFirstSelectSchema.optional(), include: z.lazy(() => TalonariosIncludeObjectSchema.optional()), orderBy: z.union([TalonariosOrderByWithRelationInputObjectSchema, TalonariosOrderByWithRelationInputObjectSchema.array()]).optional(), where: TalonariosWhereInputObjectSchema.optional(), cursor: TalonariosWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TalonariosScalarFieldEnumSchema, TalonariosScalarFieldEnumSchema.array()]).optional() }).strict();