import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuarioEmpresaIncludeObjectSchema as UsuarioEmpresaIncludeObjectSchema } from './objects/UsuarioEmpresaInclude.schema';
import { UsuarioEmpresaOrderByWithRelationInputObjectSchema as UsuarioEmpresaOrderByWithRelationInputObjectSchema } from './objects/UsuarioEmpresaOrderByWithRelationInput.schema';
import { UsuarioEmpresaWhereInputObjectSchema as UsuarioEmpresaWhereInputObjectSchema } from './objects/UsuarioEmpresaWhereInput.schema';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './objects/UsuarioEmpresaWhereUniqueInput.schema';
import { UsuarioEmpresaScalarFieldEnumSchema } from './enums/UsuarioEmpresaScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UsuarioEmpresaFindFirstSelectSchema: z.ZodType<Prisma.UsuarioEmpresaSelect> = z.object({
    idUsuarioEmpresa: z.boolean().optional(),
    idUsuario: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    usuario: z.boolean().optional(),
    empresa: z.boolean().optional(),
    rol: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UsuarioEmpresaSelect>;

export const UsuarioEmpresaFindFirstSelectZodSchema = z.object({
    idUsuarioEmpresa: z.boolean().optional(),
    idUsuario: z.boolean().optional(),
    idEmpresa: z.boolean().optional(),
    usuario: z.boolean().optional(),
    empresa: z.boolean().optional(),
    rol: z.boolean().optional()
  }).strict();

export const UsuarioEmpresaFindFirstSchema: z.ZodType<Prisma.UsuarioEmpresaFindFirstArgs> = z.object({ select: UsuarioEmpresaFindFirstSelectSchema.optional(), include: z.lazy(() => UsuarioEmpresaIncludeObjectSchema.optional()), orderBy: z.union([UsuarioEmpresaOrderByWithRelationInputObjectSchema, UsuarioEmpresaOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuarioEmpresaWhereInputObjectSchema.optional(), cursor: UsuarioEmpresaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UsuarioEmpresaScalarFieldEnumSchema, UsuarioEmpresaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioEmpresaFindFirstArgs>;

export const UsuarioEmpresaFindFirstZodSchema = z.object({ select: UsuarioEmpresaFindFirstSelectSchema.optional(), include: z.lazy(() => UsuarioEmpresaIncludeObjectSchema.optional()), orderBy: z.union([UsuarioEmpresaOrderByWithRelationInputObjectSchema, UsuarioEmpresaOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuarioEmpresaWhereInputObjectSchema.optional(), cursor: UsuarioEmpresaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UsuarioEmpresaScalarFieldEnumSchema, UsuarioEmpresaScalarFieldEnumSchema.array()]).optional() }).strict();