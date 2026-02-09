import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpDetSelectObjectSchema as ListaPvpDetSelectObjectSchema } from './objects/ListaPvpDetSelect.schema';
import { ListaPvpDetCreateManyInputObjectSchema as ListaPvpDetCreateManyInputObjectSchema } from './objects/ListaPvpDetCreateManyInput.schema';

export const ListaPvpDetCreateManyAndReturnSchema: z.ZodType<Prisma.ListaPvpDetCreateManyAndReturnArgs> = z.object({ select: ListaPvpDetSelectObjectSchema.optional(), data: z.union([ ListaPvpDetCreateManyInputObjectSchema, z.array(ListaPvpDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpDetCreateManyAndReturnArgs>;

export const ListaPvpDetCreateManyAndReturnZodSchema = z.object({ select: ListaPvpDetSelectObjectSchema.optional(), data: z.union([ ListaPvpDetCreateManyInputObjectSchema, z.array(ListaPvpDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();