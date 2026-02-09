import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaIncludeObjectSchema as FacturaIncludeObjectSchema } from './objects/FacturaInclude.schema';
import { FacturaOrderByWithRelationInputObjectSchema as FacturaOrderByWithRelationInputObjectSchema } from './objects/FacturaOrderByWithRelationInput.schema';
import { FacturaWhereInputObjectSchema as FacturaWhereInputObjectSchema } from './objects/FacturaWhereInput.schema';
import { FacturaWhereUniqueInputObjectSchema as FacturaWhereUniqueInputObjectSchema } from './objects/FacturaWhereUniqueInput.schema';
import { FacturaScalarFieldEnumSchema } from './enums/FacturaScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FacturaFindManySelectSchema: z.ZodType<Prisma.FacturaSelect> = z.object({
    idVenta: z.boolean().optional(),
    cae: z.boolean().optional(),
    vencCae: z.boolean().optional(),
    neto: z.boolean().optional(),
    iva: z.boolean().optional(),
    total: z.boolean().optional(),
    venta: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FacturaSelect>;

export const FacturaFindManySelectZodSchema = z.object({
    idVenta: z.boolean().optional(),
    cae: z.boolean().optional(),
    vencCae: z.boolean().optional(),
    neto: z.boolean().optional(),
    iva: z.boolean().optional(),
    total: z.boolean().optional(),
    venta: z.boolean().optional()
  }).strict();

export const FacturaFindManySchema: z.ZodType<Prisma.FacturaFindManyArgs> = z.object({ select: FacturaFindManySelectSchema.optional(), include: z.lazy(() => FacturaIncludeObjectSchema.optional()), orderBy: z.union([FacturaOrderByWithRelationInputObjectSchema, FacturaOrderByWithRelationInputObjectSchema.array()]).optional(), where: FacturaWhereInputObjectSchema.optional(), cursor: FacturaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FacturaScalarFieldEnumSchema, FacturaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FacturaFindManyArgs>;

export const FacturaFindManyZodSchema = z.object({ select: FacturaFindManySelectSchema.optional(), include: z.lazy(() => FacturaIncludeObjectSchema.optional()), orderBy: z.union([FacturaOrderByWithRelationInputObjectSchema, FacturaOrderByWithRelationInputObjectSchema.array()]).optional(), where: FacturaWhereInputObjectSchema.optional(), cursor: FacturaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FacturaScalarFieldEnumSchema, FacturaScalarFieldEnumSchema.array()]).optional() }).strict();