import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasSelectObjectSchema as ListasSelectObjectSchema } from './objects/ListasSelect.schema';
import { ListasIncludeObjectSchema as ListasIncludeObjectSchema } from './objects/ListasInclude.schema';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './objects/ListasWhereUniqueInput.schema';

export const ListasFindUniqueSchema: z.ZodType<Prisma.ListasFindUniqueArgs> = z.object({ select: ListasSelectObjectSchema.optional(), include: ListasIncludeObjectSchema.optional(), where: ListasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ListasFindUniqueArgs>;

export const ListasFindUniqueZodSchema = z.object({ select: ListasSelectObjectSchema.optional(), include: ListasIncludeObjectSchema.optional(), where: ListasWhereUniqueInputObjectSchema }).strict();