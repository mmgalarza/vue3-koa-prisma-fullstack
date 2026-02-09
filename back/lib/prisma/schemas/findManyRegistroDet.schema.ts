import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroDetIncludeObjectSchema as RegistroDetIncludeObjectSchema } from './objects/RegistroDetInclude.schema';
import { RegistroDetOrderByWithRelationInputObjectSchema as RegistroDetOrderByWithRelationInputObjectSchema } from './objects/RegistroDetOrderByWithRelationInput.schema';
import { RegistroDetWhereInputObjectSchema as RegistroDetWhereInputObjectSchema } from './objects/RegistroDetWhereInput.schema';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './objects/RegistroDetWhereUniqueInput.schema';
import { RegistroDetScalarFieldEnumSchema } from './enums/RegistroDetScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RegistroDetFindManySelectSchema: z.ZodType<Prisma.RegistroDetSelect> = z.object({
    idRegistroDet: z.boolean().optional(),
    idRegistro: z.boolean().optional(),
    idProducto: z.boolean().optional(),
    idAlmacen: z.boolean().optional(),
    flujoAlmacen: z.boolean().optional(),
    cantidad: z.boolean().optional(),
    registro: z.boolean().optional(),
    producto: z.boolean().optional(),
    almacen: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RegistroDetSelect>;

export const RegistroDetFindManySelectZodSchema = z.object({
    idRegistroDet: z.boolean().optional(),
    idRegistro: z.boolean().optional(),
    idProducto: z.boolean().optional(),
    idAlmacen: z.boolean().optional(),
    flujoAlmacen: z.boolean().optional(),
    cantidad: z.boolean().optional(),
    registro: z.boolean().optional(),
    producto: z.boolean().optional(),
    almacen: z.boolean().optional()
  }).strict();

export const RegistroDetFindManySchema: z.ZodType<Prisma.RegistroDetFindManyArgs> = z.object({ select: RegistroDetFindManySelectSchema.optional(), include: z.lazy(() => RegistroDetIncludeObjectSchema.optional()), orderBy: z.union([RegistroDetOrderByWithRelationInputObjectSchema, RegistroDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistroDetWhereInputObjectSchema.optional(), cursor: RegistroDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RegistroDetScalarFieldEnumSchema, RegistroDetScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RegistroDetFindManyArgs>;

export const RegistroDetFindManyZodSchema = z.object({ select: RegistroDetFindManySelectSchema.optional(), include: z.lazy(() => RegistroDetIncludeObjectSchema.optional()), orderBy: z.union([RegistroDetOrderByWithRelationInputObjectSchema, RegistroDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistroDetWhereInputObjectSchema.optional(), cursor: RegistroDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RegistroDetScalarFieldEnumSchema, RegistroDetScalarFieldEnumSchema.array()]).optional() }).strict();