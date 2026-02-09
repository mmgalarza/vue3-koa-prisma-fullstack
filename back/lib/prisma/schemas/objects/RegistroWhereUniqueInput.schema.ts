import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idRegistro: z.number().int().optional()
}).strict();
export const RegistroWhereUniqueInputObjectSchema: z.ZodType<Prisma.RegistroWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroWhereUniqueInput>;
export const RegistroWhereUniqueInputObjectZodSchema = makeSchema();
