import type { Prisma } from '../client';
import * as z from 'zod';
import { EmpresasSelectObjectSchema as EmpresasSelectObjectSchema } from './objects/EmpresasSelect.schema';
import { EmpresasIncludeObjectSchema as EmpresasIncludeObjectSchema } from './objects/EmpresasInclude.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './objects/EmpresasWhereUniqueInput.schema';

export const EmpresasFindUniqueOrThrowSchema: z.ZodType<Prisma.EmpresasFindUniqueOrThrowArgs> = z.object({ select: EmpresasSelectObjectSchema.optional(), include: EmpresasIncludeObjectSchema.optional(), where: EmpresasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EmpresasFindUniqueOrThrowArgs>;

export const EmpresasFindUniqueOrThrowZodSchema = z.object({ select: EmpresasSelectObjectSchema.optional(), include: EmpresasIncludeObjectSchema.optional(), where: EmpresasWhereUniqueInputObjectSchema }).strict();