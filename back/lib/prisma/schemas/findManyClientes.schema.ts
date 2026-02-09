import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientesIncludeObjectSchema as ClientesIncludeObjectSchema } from './objects/ClientesInclude.schema';
import { ClientesOrderByWithRelationInputObjectSchema as ClientesOrderByWithRelationInputObjectSchema } from './objects/ClientesOrderByWithRelationInput.schema';
import { ClientesWhereInputObjectSchema as ClientesWhereInputObjectSchema } from './objects/ClientesWhereInput.schema';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './objects/ClientesWhereUniqueInput.schema';
import { ClientesScalarFieldEnumSchema } from './enums/ClientesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClientesFindManySelectSchema: z.ZodType<Prisma.ClientesSelect> = z.object({
    idCliente: z.boolean().optional(),
    nombre: z.boolean().optional(),
    email: z.boolean().optional(),
    calle: z.boolean().optional(),
    numero: z.boolean().optional(),
    ciudad: z.boolean().optional(),
    provincia: z.boolean().optional(),
    codigoPostal: z.boolean().optional(),
    pais: z.boolean().optional(),
    contacto: z.boolean().optional(),
    activo: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    empresa: z.boolean().optional(),
    ventas: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ClientesSelect>;

export const ClientesFindManySelectZodSchema = z.object({
    idCliente: z.boolean().optional(),
    nombre: z.boolean().optional(),
    email: z.boolean().optional(),
    calle: z.boolean().optional(),
    numero: z.boolean().optional(),
    ciudad: z.boolean().optional(),
    provincia: z.boolean().optional(),
    codigoPostal: z.boolean().optional(),
    pais: z.boolean().optional(),
    contacto: z.boolean().optional(),
    activo: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    empresa: z.boolean().optional(),
    ventas: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ClientesFindManySchema: z.ZodType<Prisma.ClientesFindManyArgs> = z.object({ select: ClientesFindManySelectSchema.optional(), include: z.lazy(() => ClientesIncludeObjectSchema.optional()), orderBy: z.union([ClientesOrderByWithRelationInputObjectSchema, ClientesOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientesWhereInputObjectSchema.optional(), cursor: ClientesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientesScalarFieldEnumSchema, ClientesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ClientesFindManyArgs>;

export const ClientesFindManyZodSchema = z.object({ select: ClientesFindManySelectSchema.optional(), include: z.lazy(() => ClientesIncludeObjectSchema.optional()), orderBy: z.union([ClientesOrderByWithRelationInputObjectSchema, ClientesOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientesWhereInputObjectSchema.optional(), cursor: ClientesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientesScalarFieldEnumSchema, ClientesScalarFieldEnumSchema.array()]).optional() }).strict();