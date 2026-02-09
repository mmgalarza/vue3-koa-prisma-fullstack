import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroDetSelectObjectSchema as RegistroDetSelectObjectSchema } from './objects/RegistroDetSelect.schema';
import { RegistroDetIncludeObjectSchema as RegistroDetIncludeObjectSchema } from './objects/RegistroDetInclude.schema';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './objects/RegistroDetWhereUniqueInput.schema';

export const RegistroDetDeleteOneSchema: z.ZodType<Prisma.RegistroDetDeleteArgs> = z.object({ select: RegistroDetSelectObjectSchema.optional(), include: RegistroDetIncludeObjectSchema.optional(), where: RegistroDetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RegistroDetDeleteArgs>;

export const RegistroDetDeleteOneZodSchema = z.object({ select: RegistroDetSelectObjectSchema.optional(), include: RegistroDetIncludeObjectSchema.optional(), where: RegistroDetWhereUniqueInputObjectSchema }).strict();