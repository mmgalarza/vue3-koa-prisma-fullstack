import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuariosIncludeObjectSchema as UsuariosIncludeObjectSchema } from './objects/UsuariosInclude.schema';
import { UsuariosOrderByWithRelationInputObjectSchema as UsuariosOrderByWithRelationInputObjectSchema } from './objects/UsuariosOrderByWithRelationInput.schema';
import { UsuariosWhereInputObjectSchema as UsuariosWhereInputObjectSchema } from './objects/UsuariosWhereInput.schema';
import { UsuariosWhereUniqueInputObjectSchema as UsuariosWhereUniqueInputObjectSchema } from './objects/UsuariosWhereUniqueInput.schema';
import { UsuariosScalarFieldEnumSchema } from './enums/UsuariosScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UsuariosFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UsuariosSelect> = z.object({
    idUsuario: z.boolean().optional(),
    username: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    nombre: z.boolean().optional(),
    activo: z.boolean().optional(),
    creadoEn: z.boolean().optional(),
    actualizadoEn: z.boolean().optional(),
    UsuarioEmpresas: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UsuariosSelect>;

export const UsuariosFindFirstOrThrowSelectZodSchema = z.object({
    idUsuario: z.boolean().optional(),
    username: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    nombre: z.boolean().optional(),
    activo: z.boolean().optional(),
    creadoEn: z.boolean().optional(),
    actualizadoEn: z.boolean().optional(),
    UsuarioEmpresas: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const UsuariosFindFirstOrThrowSchema: z.ZodType<Prisma.UsuariosFindFirstOrThrowArgs> = z.object({ select: UsuariosFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UsuariosIncludeObjectSchema.optional()), orderBy: z.union([UsuariosOrderByWithRelationInputObjectSchema, UsuariosOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuariosWhereInputObjectSchema.optional(), cursor: UsuariosWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UsuariosScalarFieldEnumSchema, UsuariosScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UsuariosFindFirstOrThrowArgs>;

export const UsuariosFindFirstOrThrowZodSchema = z.object({ select: UsuariosFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UsuariosIncludeObjectSchema.optional()), orderBy: z.union([UsuariosOrderByWithRelationInputObjectSchema, UsuariosOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuariosWhereInputObjectSchema.optional(), cursor: UsuariosWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UsuariosScalarFieldEnumSchema, UsuariosScalarFieldEnumSchema.array()]).optional() }).strict();