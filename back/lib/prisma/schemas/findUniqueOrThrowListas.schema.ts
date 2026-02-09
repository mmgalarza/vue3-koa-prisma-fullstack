import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasSelectObjectSchema as ListasSelectObjectSchema } from './objects/ListasSelect.schema';
import { ListasIncludeObjectSchema as ListasIncludeObjectSchema } from './objects/ListasInclude.schema';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './objects/ListasWhereUniqueInput.schema';

export const ListasFindUniqueOrThrowSchema: z.ZodType<Prisma.ListasFindUniqueOrThrowArgs> = z.object({ select: ListasSelectObjectSchema.optional(), include: ListasIncludeObjectSchema.optional(), where: ListasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ListasFindUniqueOrThrowArgs>;

export const ListasFindUniqueOrThrowZodSchema = z.object({ select: ListasSelectObjectSchema.optional(), include: ListasIncludeObjectSchema.optional(), where: ListasWhereUniqueInputObjectSchema }).strict();