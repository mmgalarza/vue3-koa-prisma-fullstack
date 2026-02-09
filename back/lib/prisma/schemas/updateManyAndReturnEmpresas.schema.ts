import type { Prisma } from '../client';
import * as z from 'zod';
import { EmpresasSelectObjectSchema as EmpresasSelectObjectSchema } from './objects/EmpresasSelect.schema';
import { EmpresasUpdateManyMutationInputObjectSchema as EmpresasUpdateManyMutationInputObjectSchema } from './objects/EmpresasUpdateManyMutationInput.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './objects/EmpresasWhereInput.schema';

export const EmpresasUpdateManyAndReturnSchema: z.ZodType<Prisma.EmpresasUpdateManyAndReturnArgs> = z.object({ select: EmpresasSelectObjectSchema.optional(), data: EmpresasUpdateManyMutationInputObjectSchema, where: EmpresasWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EmpresasUpdateManyAndReturnArgs>;

export const EmpresasUpdateManyAndReturnZodSchema = z.object({ select: EmpresasSelectObjectSchema.optional(), data: EmpresasUpdateManyMutationInputObjectSchema, where: EmpresasWhereInputObjectSchema.optional() }).strict();