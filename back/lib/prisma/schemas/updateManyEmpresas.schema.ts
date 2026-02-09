import type { Prisma } from '../client';
import * as z from 'zod';
import { EmpresasUpdateManyMutationInputObjectSchema as EmpresasUpdateManyMutationInputObjectSchema } from './objects/EmpresasUpdateManyMutationInput.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './objects/EmpresasWhereInput.schema';

export const EmpresasUpdateManySchema: z.ZodType<Prisma.EmpresasUpdateManyArgs> = z.object({ data: EmpresasUpdateManyMutationInputObjectSchema, where: EmpresasWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EmpresasUpdateManyArgs>;

export const EmpresasUpdateManyZodSchema = z.object({ data: EmpresasUpdateManyMutationInputObjectSchema, where: EmpresasWhereInputObjectSchema.optional() }).strict();