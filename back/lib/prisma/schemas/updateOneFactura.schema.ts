import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaSelectObjectSchema as FacturaSelectObjectSchema } from './objects/FacturaSelect.schema';
import { FacturaIncludeObjectSchema as FacturaIncludeObjectSchema } from './objects/FacturaInclude.schema';
import { FacturaUpdateInputObjectSchema as FacturaUpdateInputObjectSchema } from './objects/FacturaUpdateInput.schema';
import { FacturaUncheckedUpdateInputObjectSchema as FacturaUncheckedUpdateInputObjectSchema } from './objects/FacturaUncheckedUpdateInput.schema';
import { FacturaWhereUniqueInputObjectSchema as FacturaWhereUniqueInputObjectSchema } from './objects/FacturaWhereUniqueInput.schema';

export const FacturaUpdateOneSchema: z.ZodType<Prisma.FacturaUpdateArgs> = z.object({ select: FacturaSelectObjectSchema.optional(), include: FacturaIncludeObjectSchema.optional(), data: z.union([FacturaUpdateInputObjectSchema, FacturaUncheckedUpdateInputObjectSchema]), where: FacturaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FacturaUpdateArgs>;

export const FacturaUpdateOneZodSchema = z.object({ select: FacturaSelectObjectSchema.optional(), include: FacturaIncludeObjectSchema.optional(), data: z.union([FacturaUpdateInputObjectSchema, FacturaUncheckedUpdateInputObjectSchema]), where: FacturaWhereUniqueInputObjectSchema }).strict();