import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idListaPvpDet: z.number().int().optional()
}).strict();
export const ListaPvpDetWhereUniqueInputObjectSchema: z.ZodType<Prisma.ListaPvpDetWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetWhereUniqueInput>;
export const ListaPvpDetWhereUniqueInputObjectZodSchema = makeSchema();
