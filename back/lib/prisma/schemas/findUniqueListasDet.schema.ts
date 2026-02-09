import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasDetSelectObjectSchema as ListasDetSelectObjectSchema } from './objects/ListasDetSelect.schema';
import { ListasDetIncludeObjectSchema as ListasDetIncludeObjectSchema } from './objects/ListasDetInclude.schema';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './objects/ListasDetWhereUniqueInput.schema';

export const ListasDetFindUniqueSchema: z.ZodType<Prisma.ListasDetFindUniqueArgs> = z.object({ select: ListasDetSelectObjectSchema.optional(), include: ListasDetIncludeObjectSchema.optional(), where: ListasDetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ListasDetFindUniqueArgs>;

export const ListasDetFindUniqueZodSchema = z.object({ select: ListasDetSelectObjectSchema.optional(), include: ListasDetIncludeObjectSchema.optional(), where: ListasDetWhereUniqueInputObjectSchema }).strict();