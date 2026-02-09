import type { Prisma } from '../client';
import * as z from 'zod';
import { ProveedoresSelectObjectSchema as ProveedoresSelectObjectSchema } from './objects/ProveedoresSelect.schema';
import { ProveedoresIncludeObjectSchema as ProveedoresIncludeObjectSchema } from './objects/ProveedoresInclude.schema';
import { ProveedoresWhereUniqueInputObjectSchema as ProveedoresWhereUniqueInputObjectSchema } from './objects/ProveedoresWhereUniqueInput.schema';

export const ProveedoresFindUniqueSchema: z.ZodType<Prisma.ProveedoresFindUniqueArgs> = z.object({ select: ProveedoresSelectObjectSchema.optional(), include: ProveedoresIncludeObjectSchema.optional(), where: ProveedoresWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProveedoresFindUniqueArgs>;

export const ProveedoresFindUniqueZodSchema = z.object({ select: ProveedoresSelectObjectSchema.optional(), include: ProveedoresIncludeObjectSchema.optional(), where: ProveedoresWhereUniqueInputObjectSchema }).strict();