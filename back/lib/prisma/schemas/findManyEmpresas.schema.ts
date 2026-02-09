import type { Prisma } from '../client';
import * as z from 'zod';
import { EmpresasIncludeObjectSchema as EmpresasIncludeObjectSchema } from './objects/EmpresasInclude.schema';
import { EmpresasOrderByWithRelationInputObjectSchema as EmpresasOrderByWithRelationInputObjectSchema } from './objects/EmpresasOrderByWithRelationInput.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './objects/EmpresasWhereInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './objects/EmpresasWhereUniqueInput.schema';
import { EmpresasScalarFieldEnumSchema } from './enums/EmpresasScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EmpresasFindManySelectSchema: z.ZodType<Prisma.EmpresasSelect> = z.object({
    idEmpresa: z.boolean().optional(),
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
    UsuarioEmpresas: z.boolean().optional(),
    clientes: z.boolean().optional(),
    proveedores: z.boolean().optional(),
    almacenes: z.boolean().optional(),
    ventas: z.boolean().optional(),
    categorias: z.boolean().optional(),
    actividades: z.boolean().optional(),
    listasPvp: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EmpresasSelect>;

export const EmpresasFindManySelectZodSchema = z.object({
    idEmpresa: z.boolean().optional(),
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
    UsuarioEmpresas: z.boolean().optional(),
    clientes: z.boolean().optional(),
    proveedores: z.boolean().optional(),
    almacenes: z.boolean().optional(),
    ventas: z.boolean().optional(),
    categorias: z.boolean().optional(),
    actividades: z.boolean().optional(),
    listasPvp: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const EmpresasFindManySchema: z.ZodType<Prisma.EmpresasFindManyArgs> = z.object({ select: EmpresasFindManySelectSchema.optional(), include: z.lazy(() => EmpresasIncludeObjectSchema.optional()), orderBy: z.union([EmpresasOrderByWithRelationInputObjectSchema, EmpresasOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmpresasWhereInputObjectSchema.optional(), cursor: EmpresasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EmpresasScalarFieldEnumSchema, EmpresasScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EmpresasFindManyArgs>;

export const EmpresasFindManyZodSchema = z.object({ select: EmpresasFindManySelectSchema.optional(), include: z.lazy(() => EmpresasIncludeObjectSchema.optional()), orderBy: z.union([EmpresasOrderByWithRelationInputObjectSchema, EmpresasOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmpresasWhereInputObjectSchema.optional(), cursor: EmpresasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EmpresasScalarFieldEnumSchema, EmpresasScalarFieldEnumSchema.array()]).optional() }).strict();