import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaUpdateManyMutationInputObjectSchema as FacturaUpdateManyMutationInputObjectSchema } from './objects/FacturaUpdateManyMutationInput.schema';
import { FacturaWhereInputObjectSchema as FacturaWhereInputObjectSchema } from './objects/FacturaWhereInput.schema';

export const FacturaUpdateManySchema: z.ZodType<Prisma.FacturaUpdateManyArgs> = z.object({ data: FacturaUpdateManyMutationInputObjectSchema, where: FacturaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FacturaUpdateManyArgs>;

export const FacturaUpdateManyZodSchema = z.object({ data: FacturaUpdateManyMutationInputObjectSchema, where: FacturaWhereInputObjectSchema.optional() }).strict();