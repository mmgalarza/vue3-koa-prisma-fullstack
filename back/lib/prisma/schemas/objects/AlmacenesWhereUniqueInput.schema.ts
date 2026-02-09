import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idAlmacen: z.number().int().optional()
}).strict();
export const AlmacenesWhereUniqueInputObjectSchema: z.ZodType<Prisma.AlmacenesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesWhereUniqueInput>;
export const AlmacenesWhereUniqueInputObjectZodSchema = makeSchema();
