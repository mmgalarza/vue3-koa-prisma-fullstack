import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idTalon: z.number().int().optional()
}).strict();
export const TalonariosWhereUniqueInputObjectSchema: z.ZodType<Prisma.TalonariosWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosWhereUniqueInput>;
export const TalonariosWhereUniqueInputObjectZodSchema = makeSchema();
