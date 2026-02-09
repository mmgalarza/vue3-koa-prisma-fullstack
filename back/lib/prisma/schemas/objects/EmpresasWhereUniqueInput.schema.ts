import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idEmpresa: z.number().int().optional()
}).strict();
export const EmpresasWhereUniqueInputObjectSchema: z.ZodType<Prisma.EmpresasWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasWhereUniqueInput>;
export const EmpresasWhereUniqueInputObjectZodSchema = makeSchema();
