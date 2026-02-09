import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuariosSelectObjectSchema as UsuariosSelectObjectSchema } from './objects/UsuariosSelect.schema';
import { UsuariosIncludeObjectSchema as UsuariosIncludeObjectSchema } from './objects/UsuariosInclude.schema';
import { UsuariosCreateInputObjectSchema as UsuariosCreateInputObjectSchema } from './objects/UsuariosCreateInput.schema';
import { UsuariosUncheckedCreateInputObjectSchema as UsuariosUncheckedCreateInputObjectSchema } from './objects/UsuariosUncheckedCreateInput.schema';

export const UsuariosCreateOneSchema: z.ZodType<Prisma.UsuariosCreateArgs> = z.object({ select: UsuariosSelectObjectSchema.optional(), include: UsuariosIncludeObjectSchema.optional(), data: z.union([UsuariosCreateInputObjectSchema, UsuariosUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UsuariosCreateArgs>;

export const UsuariosCreateOneZodSchema = z.object({ select: UsuariosSelectObjectSchema.optional(), include: UsuariosIncludeObjectSchema.optional(), data: z.union([UsuariosCreateInputObjectSchema, UsuariosUncheckedCreateInputObjectSchema]) }).strict();