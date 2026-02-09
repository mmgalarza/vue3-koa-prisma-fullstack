import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroIncludeObjectSchema as RegistroIncludeObjectSchema } from './objects/RegistroInclude.schema';
import { RegistroOrderByWithRelationInputObjectSchema as RegistroOrderByWithRelationInputObjectSchema } from './objects/RegistroOrderByWithRelationInput.schema';
import { RegistroWhereInputObjectSchema as RegistroWhereInputObjectSchema } from './objects/RegistroWhereInput.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './objects/RegistroWhereUniqueInput.schema';
import { RegistroScalarFieldEnumSchema } from './enums/RegistroScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RegistroFindFirstOrThrowSelectSchema: z.ZodType<Prisma.RegistroSelect> = z.object({
    idRegistro: z.boolean().optional(),
    fecha: z.boolean().optional(),
    numero: z.boolean().optional(),
    idTipoDoc: z.boolean().optional(),
    idVenta: z.boolean().optional(),
    idActividad: z.boolean().optional(),
    tipoDoc: z.boolean().optional(),
    venta: z.boolean().optional(),
    actividad: z.boolean().optional(),
    detalles: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RegistroSelect>;

export const RegistroFindFirstOrThrowSelectZodSchema = z.object({
    idRegistro: z.boolean().optional(),
    fecha: z.boolean().optional(),
    numero: z.boolean().optional(),
    idTipoDoc: z.boolean().optional(),
    idVenta: z.boolean().optional(),
    idActividad: z.boolean().optional(),
    tipoDoc: z.boolean().optional(),
    venta: z.boolean().optional(),
    actividad: z.boolean().optional(),
    detalles: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const RegistroFindFirstOrThrowSchema: z.ZodType<Prisma.RegistroFindFirstOrThrowArgs> = z.object({ select: RegistroFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => RegistroIncludeObjectSchema.optional()), orderBy: z.union([RegistroOrderByWithRelationInputObjectSchema, RegistroOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistroWhereInputObjectSchema.optional(), cursor: RegistroWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RegistroScalarFieldEnumSchema, RegistroScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RegistroFindFirstOrThrowArgs>;

export const RegistroFindFirstOrThrowZodSchema = z.object({ select: RegistroFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => RegistroIncludeObjectSchema.optional()), orderBy: z.union([RegistroOrderByWithRelationInputObjectSchema, RegistroOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistroWhereInputObjectSchema.optional(), cursor: RegistroWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RegistroScalarFieldEnumSchema, RegistroScalarFieldEnumSchema.array()]).optional() }).strict();