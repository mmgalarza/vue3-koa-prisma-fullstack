import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaSelectObjectSchema as FacturaSelectObjectSchema } from './objects/FacturaSelect.schema';
import { FacturaUpdateManyMutationInputObjectSchema as FacturaUpdateManyMutationInputObjectSchema } from './objects/FacturaUpdateManyMutationInput.schema';
import { FacturaWhereInputObjectSchema as FacturaWhereInputObjectSchema } from './objects/FacturaWhereInput.schema';

export const FacturaUpdateManyAndReturnSchema: z.ZodType<Prisma.FacturaUpdateManyAndReturnArgs> = z.object({ select: FacturaSelectObjectSchema.optional(), data: FacturaUpdateManyMutationInputObjectSchema, where: FacturaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FacturaUpdateManyAndReturnArgs>;

export const FacturaUpdateManyAndReturnZodSchema = z.object({ select: FacturaSelectObjectSchema.optional(), data: FacturaUpdateManyMutationInputObjectSchema, where: FacturaWhereInputObjectSchema.optional() }).strict();