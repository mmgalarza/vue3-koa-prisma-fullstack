import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasDetIncludeObjectSchema as ListasDetIncludeObjectSchema } from './objects/ListasDetInclude.schema';
import { ListasDetOrderByWithRelationInputObjectSchema as ListasDetOrderByWithRelationInputObjectSchema } from './objects/ListasDetOrderByWithRelationInput.schema';
import { ListasDetWhereInputObjectSchema as ListasDetWhereInputObjectSchema } from './objects/ListasDetWhereInput.schema';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './objects/ListasDetWhereUniqueInput.schema';
import { ListasDetScalarFieldEnumSchema } from './enums/ListasDetScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ListasDetFindManySelectSchema: z.ZodType<Prisma.ListasDetSelect> = z.object({
    idListaDet: z.boolean().optional(),
    idLista: z.boolean().optional(),
    idProducto: z.boolean().optional(),
    precio: z.boolean().optional(),
    descuento: z.boolean().optional(),
    lista: z.boolean().optional(),
    producto: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ListasDetSelect>;

export const ListasDetFindManySelectZodSchema = z.object({
    idListaDet: z.boolean().optional(),
    idLista: z.boolean().optional(),
    idProducto: z.boolean().optional(),
    precio: z.boolean().optional(),
    descuento: z.boolean().optional(),
    lista: z.boolean().optional(),
    producto: z.boolean().optional()
  }).strict();

export const ListasDetFindManySchema: z.ZodType<Prisma.ListasDetFindManyArgs> = z.object({ select: ListasDetFindManySelectSchema.optional(), include: z.lazy(() => ListasDetIncludeObjectSchema.optional()), orderBy: z.union([ListasDetOrderByWithRelationInputObjectSchema, ListasDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListasDetWhereInputObjectSchema.optional(), cursor: ListasDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ListasDetScalarFieldEnumSchema, ListasDetScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ListasDetFindManyArgs>;

export const ListasDetFindManyZodSchema = z.object({ select: ListasDetFindManySelectSchema.optional(), include: z.lazy(() => ListasDetIncludeObjectSchema.optional()), orderBy: z.union([ListasDetOrderByWithRelationInputObjectSchema, ListasDetOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListasDetWhereInputObjectSchema.optional(), cursor: ListasDetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ListasDetScalarFieldEnumSchema, ListasDetScalarFieldEnumSchema.array()]).optional() }).strict();