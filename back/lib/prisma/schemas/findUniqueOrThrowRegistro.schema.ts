import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroSelectObjectSchema as RegistroSelectObjectSchema } from './objects/RegistroSelect.schema';
import { RegistroIncludeObjectSchema as RegistroIncludeObjectSchema } from './objects/RegistroInclude.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './objects/RegistroWhereUniqueInput.schema';

export const RegistroFindUniqueOrThrowSchema: z.ZodType<Prisma.RegistroFindUniqueOrThrowArgs> = z.object({ select: RegistroSelectObjectSchema.optional(), include: RegistroIncludeObjectSchema.optional(), where: RegistroWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RegistroFindUniqueOrThrowArgs>;

export const RegistroFindUniqueOrThrowZodSchema = z.object({ select: RegistroSelectObjectSchema.optional(), include: RegistroIncludeObjectSchema.optional(), where: RegistroWhereUniqueInputObjectSchema }).strict();