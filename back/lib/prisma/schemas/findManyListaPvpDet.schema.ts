import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpDetIncludeObjectSchema as ListaPvpDetIncludeObjectSchema } from './objects/ListaPvpDetInclude.schema';
import { ListaPvpDetOrderByWithRelationInputObjectSchema as ListaPvpDetOrderByWithRelationInputObjectSchema } from './objects/ListaPvpDetOrderByWithRelationInput.schema';
import { ListaPvpDetWhereInputObjectSchema as ListaPvpDetWhereInputObjectSchema } from './objects/ListaPvpDetWhereInput.schema';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './objects/ListaPvpDetWhereUniqueInput.schema';
import { ListaPvpDetScalarFieldEnumSchema } from './enums/ListaPvpDetScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ListaPvpDetFindManySelectSchema: z.ZodType<Prisma.ListaPvpDetSelect> = z.object({
    idListaPvpDet: z.boolean().optional(),
    idListaPvp: z.boolean().optional(),
    idProducto: z.boolean().optional(),
    precioVenta: z.boolean().optional(),
    listaPvp: z.boolean().optional(),
    producto: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ListaPvpDetSelect>;

export const ListaPvpDetFindManySelectZodSchema = z.object({
    idListaPvpDet: z.boolean().optional(),
    idListaPvp: z.boolean().optional(),
    idProducto: z.boolean().optional(),
    precioVenta: z.boolean().optional(),
    listaPvp: z.boolean().optional(),
    producto: z.boolean().optional()
  }).strict();

export const ListaPvpDetFindManySchema: z.ZodType<Prisma.ListaPvpDetFindManyArgs> = z.object({ select: ListaPvpDetFindManySelectSchema.optional(), include: z.lazy(() => ListaPvpDetIncludeObjectSchema.optional()), orderBy: z.union([ListaPvpDetOrderByWithRelationInputObjectSchema, ListaPvpDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListaPvpDetWhereInputObjectSchema.optional(), cursor: ListaPvpDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ListaPvpDetScalarFieldEnumSchema, ListaPvpDetScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpDetFindManyArgs>;

export const ListaPvpDetFindManyZodSchema = z.object({ select: ListaPvpDetFindManySelectSchema.optional(), include: z.lazy(() => ListaPvpDetIncludeObjectSchema.optional()), orderBy: z.union([ListaPvpDetOrderByWithRelationInputObjectSchema, ListaPvpDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListaPvpDetWhereInputObjectSchema.optional(), cursor: ListaPvpDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ListaPvpDetScalarFieldEnumSchema, ListaPvpDetScalarFieldEnumSchema.array()]).optional() }).strict();