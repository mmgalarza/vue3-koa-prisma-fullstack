import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idCategoria: z.number().int().optional()
}).strict();
export const CategoriasWhereUniqueInputObjectSchema: z.ZodType<Prisma.CategoriasWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasWhereUniqueInput>;
export const CategoriasWhereUniqueInputObjectZodSchema = makeSchema();
