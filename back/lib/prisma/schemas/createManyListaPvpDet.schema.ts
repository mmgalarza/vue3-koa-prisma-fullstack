import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpDetCreateManyInputObjectSchema as ListaPvpDetCreateManyInputObjectSchema } from './objects/ListaPvpDetCreateManyInput.schema';

export const ListaPvpDetCreateManySchema: z.ZodType<Prisma.ListaPvpDetCreateManyArgs> = z.object({ data: z.union([ ListaPvpDetCreateManyInputObjectSchema, z.array(ListaPvpDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpDetCreateManyArgs>;

export const ListaPvpDetCreateManyZodSchema = z.object({ data: z.union([ ListaPvpDetCreateManyInputObjectSchema, z.array(ListaPvpDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();