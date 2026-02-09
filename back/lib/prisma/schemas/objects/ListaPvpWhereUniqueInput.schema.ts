import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idListaPvp: z.number().int().optional()
}).strict();
export const ListaPvpWhereUniqueInputObjectSchema: z.ZodType<Prisma.ListaPvpWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpWhereUniqueInput>;
export const ListaPvpWhereUniqueInputObjectZodSchema = makeSchema();
