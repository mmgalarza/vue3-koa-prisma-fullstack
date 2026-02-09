import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuariosSelectObjectSchema as UsuariosSelectObjectSchema } from './objects/UsuariosSelect.schema';
import { UsuariosIncludeObjectSchema as UsuariosIncludeObjectSchema } from './objects/UsuariosInclude.schema';
import { UsuariosUpdateInputObjectSchema as UsuariosUpdateInputObjectSchema } from './objects/UsuariosUpdateInput.schema';
import { UsuariosUncheckedUpdateInputObjectSchema as UsuariosUncheckedUpdateInputObjectSchema } from './objects/UsuariosUncheckedUpdateInput.schema';
import { UsuariosWhereUniqueInputObjectSchema as UsuariosWhereUniqueInputObjectSchema } from './objects/UsuariosWhereUniqueInput.schema';

export const UsuariosUpdateOneSchema: z.ZodType<Prisma.UsuariosUpdateArgs> = z.object({ select: UsuariosSelectObjectSchema.optional(), include: UsuariosIncludeObjectSchema.optional(), data: z.union([UsuariosUpdateInputObjectSchema, UsuariosUncheckedUpdateInputObjectSchema]), where: UsuariosWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UsuariosUpdateArgs>;

export const UsuariosUpdateOneZodSchema = z.object({ select: UsuariosSelectObjectSchema.optional(), include: UsuariosIncludeObjectSchema.optional(), data: z.union([UsuariosUpdateInputObjectSchema, UsuariosUncheckedUpdateInputObjectSchema]), where: UsuariosWhereUniqueInputObjectSchema }).strict();