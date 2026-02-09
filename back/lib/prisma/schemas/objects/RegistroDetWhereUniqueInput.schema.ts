import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idRegistroDet: z.number().int().optional()
}).strict();
export const RegistroDetWhereUniqueInputObjectSchema: z.ZodType<Prisma.RegistroDetWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetWhereUniqueInput>;
export const RegistroDetWhereUniqueInputObjectZodSchema = makeSchema();
