import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaSelectObjectSchema as FacturaSelectObjectSchema } from './objects/FacturaSelect.schema';
import { FacturaIncludeObjectSchema as FacturaIncludeObjectSchema } from './objects/FacturaInclude.schema';
import { FacturaWhereUniqueInputObjectSchema as FacturaWhereUniqueInputObjectSchema } from './objects/FacturaWhereUniqueInput.schema';

export const FacturaFindUniqueSchema: z.ZodType<Prisma.FacturaFindUniqueArgs> = z.object({ select: FacturaSelectObjectSchema.optional(), include: FacturaIncludeObjectSchema.optional(), where: FacturaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FacturaFindUniqueArgs>;

export const FacturaFindUniqueZodSchema = z.object({ select: FacturaSelectObjectSchema.optional(), include: FacturaIncludeObjectSchema.optional(), where: FacturaWhereUniqueInputObjectSchema }).strict();