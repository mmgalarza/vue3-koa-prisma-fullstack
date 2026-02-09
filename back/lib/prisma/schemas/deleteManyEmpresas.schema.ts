import type { Prisma } from '../client';
import * as z from 'zod';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './objects/EmpresasWhereInput.schema';

export const EmpresasDeleteManySchema: z.ZodType<Prisma.EmpresasDeleteManyArgs> = z.object({ where: EmpresasWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EmpresasDeleteManyArgs>;

export const EmpresasDeleteManyZodSchema = z.object({ where: EmpresasWhereInputObjectSchema.optional() }).strict();