import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasDetSelectObjectSchema as ListasDetSelectObjectSchema } from './objects/ListasDetSelect.schema';
import { ListasDetCreateManyInputObjectSchema as ListasDetCreateManyInputObjectSchema } from './objects/ListasDetCreateManyInput.schema';

export const ListasDetCreateManyAndReturnSchema: z.ZodType<Prisma.ListasDetCreateManyAndReturnArgs> = z.object({ select: ListasDetSelectObjectSchema.optional(), data: z.union([ ListasDetCreateManyInputObjectSchema, z.array(ListasDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ListasDetCreateManyAndReturnArgs>;

export const ListasDetCreateManyAndReturnZodSchema = z.object({ select: ListasDetSelectObjectSchema.optional(), data: z.union([ ListasDetCreateManyInputObjectSchema, z.array(ListasDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();