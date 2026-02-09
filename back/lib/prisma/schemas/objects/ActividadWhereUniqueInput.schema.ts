import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idActividad: z.number().int().optional()
}).strict();
export const ActividadWhereUniqueInputObjectSchema: z.ZodType<Prisma.ActividadWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadWhereUniqueInput>;
export const ActividadWhereUniqueInputObjectZodSchema = makeSchema();
