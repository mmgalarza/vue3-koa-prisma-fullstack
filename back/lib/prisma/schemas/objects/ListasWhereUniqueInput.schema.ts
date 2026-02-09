import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idLista: z.number().int().optional()
}).strict();
export const ListasWhereUniqueInputObjectSchema: z.ZodType<Prisma.ListasWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasWhereUniqueInput>;
export const ListasWhereUniqueInputObjectZodSchema = makeSchema();
