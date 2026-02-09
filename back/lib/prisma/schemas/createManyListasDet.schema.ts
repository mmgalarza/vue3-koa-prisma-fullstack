import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasDetCreateManyInputObjectSchema as ListasDetCreateManyInputObjectSchema } from './objects/ListasDetCreateManyInput.schema';

export const ListasDetCreateManySchema: z.ZodType<Prisma.ListasDetCreateManyArgs> = z.object({ data: z.union([ ListasDetCreateManyInputObjectSchema, z.array(ListasDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ListasDetCreateManyArgs>;

export const ListasDetCreateManyZodSchema = z.object({ data: z.union([ ListasDetCreateManyInputObjectSchema, z.array(ListasDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();