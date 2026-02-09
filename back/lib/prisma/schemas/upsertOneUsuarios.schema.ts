import type { Prisma } from '../client';
import * as z from 'zod';
import { UsuariosSelectObjectSchema as UsuariosSelectObjectSchema } from './objects/UsuariosSelect.schema';
import { UsuariosIncludeObjectSchema as UsuariosIncludeObjectSchema } from './objects/UsuariosInclude.schema';
import { UsuariosWhereUniqueInputObjectSchema as UsuariosWhereUniqueInputObjectSchema } from './objects/UsuariosWhereUniqueInput.schema';
import { UsuariosCreateInputObjectSchema as UsuariosCreateInputObjectSchema } from './objects/UsuariosCreateInput.schema';
import { UsuariosUncheckedCreateInputObjectSchema as UsuariosUncheckedCreateInputObjectSchema } from './objects/UsuariosUncheckedCreateInput.schema';
import { UsuariosUpdateInputObjectSchema as UsuariosUpdateInputObjectSchema } from './objects/UsuariosUpdateInput.schema';
import { UsuariosUncheckedUpdateInputObjectSchema as UsuariosUncheckedUpdateInputObjectSchema } from './objects/UsuariosUncheckedUpdateInput.schema';

export const UsuariosUpsertOneSchema: z.ZodType<Prisma.UsuariosUpsertArgs> = z.object({ select: UsuariosSelectObjectSchema.optional(), include: UsuariosIncludeObjectSchema.optional(), where: UsuariosWhereUniqueInputObjectSchema, create: z.union([ UsuariosCreateInputObjectSchema, UsuariosUncheckedCreateInputObjectSchema ]), update: z.union([ UsuariosUpdateInputObjectSchema, UsuariosUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UsuariosUpsertArgs>;

export const UsuariosUpsertOneZodSchema = z.object({ select: UsuariosSelectObjectSchema.optional(), include: UsuariosIncludeObjectSchema.optional(), where: UsuariosWhereUniqueInputObjectSchema, create: z.union([ UsuariosCreateInputObjectSchema, UsuariosUncheckedCreateInputObjectSchema ]), update: z.union([ UsuariosUpdateInputObjectSchema, UsuariosUncheckedUpdateInputObjectSchema ]) }).strict();