import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasIncludeObjectSchema as ListasIncludeObjectSchema } from './objects/ListasInclude.schema';
import { ListasOrderByWithRelationInputObjectSchema as ListasOrderByWithRelationInputObjectSchema } from './objects/ListasOrderByWithRelationInput.schema';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './objects/ListasWhereInput.schema';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './objects/ListasWhereUniqueInput.schema';
import { ListasScalarFieldEnumSchema } from './enums/ListasScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ListasFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ListasSelect> = z.object({
    idLista: z.boolean().optional(),
    idProveedor: z.boolean().optional(),
    refNo: z.boolean().optional(),
    fecha: z.boolean().optional(),
    observacion: z.boolean().optional(),
    proveedor: z.boolean().optional(),
    detalles: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ListasSelect>;

export const ListasFindFirstOrThrowSelectZodSchema = z.object({
    idLista: z.boolean().optional(),
    idProveedor: z.boolean().optional(),
    refNo: z.boolean().optional(),
    fecha: z.boolean().optional(),
    observacion: z.boolean().optional(),
    proveedor: z.boolean().optional(),
    detalles: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ListasFindFirstOrThrowSchema: z.ZodType<Prisma.ListasFindFirstOrThrowArgs> = z.object({ select: ListasFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ListasIncludeObjectSchema.optional()), orderBy: z.union([ListasOrderByWithRelationInputObjectSchema, ListasOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListasWhereInputObjectSchema.optional(), cursor: ListasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ListasScalarFieldEnumSchema, ListasScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ListasFindFirstOrThrowArgs>;

export const ListasFindFirstOrThrowZodSchema = z.object({ select: ListasFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ListasIncludeObjectSchema.optional()), orderBy: z.union([ListasOrderByWithRelationInputObjectSchema, ListasOrderByWithRelationInputObjectSchema.array()]).optional(), where: ListasWhereInputObjectSchema.optional(), cursor: ListasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ListasScalarFieldEnumSchema, ListasScalarFieldEnumSchema.array()]).optional() }).strict();