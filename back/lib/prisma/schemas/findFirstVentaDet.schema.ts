import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaDetIncludeObjectSchema as VentaDetIncludeObjectSchema } from './objects/VentaDetInclude.schema';
import { VentaDetOrderByWithRelationInputObjectSchema as VentaDetOrderByWithRelationInputObjectSchema } from './objects/VentaDetOrderByWithRelationInput.schema';
import { VentaDetWhereInputObjectSchema as VentaDetWhereInputObjectSchema } from './objects/VentaDetWhereInput.schema';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './objects/VentaDetWhereUniqueInput.schema';
import { VentaDetScalarFieldEnumSchema } from './enums/VentaDetScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VentaDetFindFirstSelectSchema: z.ZodType<Prisma.VentaDetSelect> = z.object({
    idVentaDet: z.boolean().optional(),
    idVenta: z.boolean().optional(),
    idProducto: z.boolean().optional(),
    cantidad: z.boolean().optional(),
    precioUnit: z.boolean().optional(),
    descuento: z.boolean().optional(),
    venta: z.boolean().optional(),
    producto: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VentaDetSelect>;

export const VentaDetFindFirstSelectZodSchema = z.object({
    idVentaDet: z.boolean().optional(),
    idVenta: z.boolean().optional(),
    idProducto: z.boolean().optional(),
    cantidad: z.boolean().optional(),
    precioUnit: z.boolean().optional(),
    descuento: z.boolean().optional(),
    venta: z.boolean().optional(),
    producto: z.boolean().optional()
  }).strict();

export const VentaDetFindFirstSchema: z.ZodType<Prisma.VentaDetFindFirstArgs> = z.object({ select: VentaDetFindFirstSelectSchema.optional(), include: z.lazy(() => VentaDetIncludeObjectSchema.optional()), orderBy: z.union([VentaDetOrderByWithRelationInputObjectSchema, VentaDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: VentaDetWhereInputObjectSchema.optional(), cursor: VentaDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VentaDetScalarFieldEnumSchema, VentaDetScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VentaDetFindFirstArgs>;

export const VentaDetFindFirstZodSchema = z.object({ select: VentaDetFindFirstSelectSchema.optional(), include: z.lazy(() => VentaDetIncludeObjectSchema.optional()), orderBy: z.union([VentaDetOrderByWithRelationInputObjectSchema, VentaDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: VentaDetWhereInputObjectSchema.optional(), cursor: VentaDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VentaDetScalarFieldEnumSchema, VentaDetScalarFieldEnumSchema.array()]).optional() }).strict();