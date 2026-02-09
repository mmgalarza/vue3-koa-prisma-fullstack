import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasDetSelectObjectSchema as ListasDetSelectObjectSchema } from './objects/ListasDetSelect.schema';
import { ListasDetIncludeObjectSchema as ListasDetIncludeObjectSchema } from './objects/ListasDetInclude.schema';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './objects/ListasDetWhereUniqueInput.schema';

export const ListasDetFindUniqueOrThrowSchema: z.ZodType<Prisma.ListasDetFindUniqueOrThrowArgs> = z.object({ select: ListasDetSelectObjectSchema.optional(), include: ListasDetIncludeObjectSchema.optional(), where: ListasDetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ListasDetFindUniqueOrThrowArgs>;

export const ListasDetFindUniqueOrThrowZodSchema = z.object({ select: ListasDetSelectObjectSchema.optional(), include: ListasDetIncludeObjectSchema.optional(), where: ListasDetWhereUniqueInputObjectSchema }).strict();