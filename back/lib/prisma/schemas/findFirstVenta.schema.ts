import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaIncludeObjectSchema as VentaIncludeObjectSchema } from './objects/VentaInclude.schema';
import { VentaOrderByWithRelationInputObjectSchema as VentaOrderByWithRelationInputObjectSchema } from './objects/VentaOrderByWithRelationInput.schema';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './objects/VentaWhereInput.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './objects/VentaWhereUniqueInput.schema';
import { VentaScalarFieldEnumSchema } from './enums/VentaScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VentaFindFirstSelectSchema: z.ZodType<Prisma.VentaSelect> = z.object({
    idVenta: z.boolean().optional(),
    fecha: z.boolean().optional(),
    estado: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    idCliente: z.boolean().optional(),
    idListaPvp: z.boolean().optional(),
    empresa: z.boolean().optional(),
    cliente: z.boolean().optional(),
    listaPvp: z.boolean().optional(),
    detalles: z.boolean().optional(),
    factura: z.boolean().optional(),
    registros: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VentaSelect>;

export const VentaFindFirstSelectZodSchema = z.object({
    idVenta: z.boolean().optional(),
    fecha: z.boolean().optional(),
    estado: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    idCliente: z.boolean().optional(),
    idListaPvp: z.boolean().optional(),
    empresa: z.boolean().optional(),
    cliente: z.boolean().optional(),
    listaPvp: z.boolean().optional(),
    detalles: z.boolean().optional(),
    factura: z.boolean().optional(),
    registros: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const VentaFindFirstSchema: z.ZodType<Prisma.VentaFindFirstArgs> = z.object({ select: VentaFindFirstSelectSchema.optional(), include: z.lazy(() => VentaIncludeObjectSchema.optional()), orderBy: z.union([VentaOrderByWithRelationInputObjectSchema, VentaOrderByWithRelationInputObjectSchema.array()]).optional(), where: VentaWhereInputObjectSchema.optional(), cursor: VentaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VentaScalarFieldEnumSchema, VentaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VentaFindFirstArgs>;

export const VentaFindFirstZodSchema = z.object({ select: VentaFindFirstSelectSchema.optional(), include: z.lazy(() => VentaIncludeObjectSchema.optional()), orderBy: z.union([VentaOrderByWithRelationInputObjectSchema, VentaOrderByWithRelationInputObjectSchema.array()]).optional(), where: VentaWhereInputObjectSchema.optional(), cursor: VentaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VentaScalarFieldEnumSchema, VentaScalarFieldEnumSchema.array()]).optional() }).strict();