import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaSelectObjectSchema as FacturaSelectObjectSchema } from './objects/FacturaSelect.schema';
import { FacturaIncludeObjectSchema as FacturaIncludeObjectSchema } from './objects/FacturaInclude.schema';
import { FacturaWhereUniqueInputObjectSchema as FacturaWhereUniqueInputObjectSchema } from './objects/FacturaWhereUniqueInput.schema';

export const FacturaFindUniqueOrThrowSchema: z.ZodType<Prisma.FacturaFindUniqueOrThrowArgs> = z.object({ select: FacturaSelectObjectSchema.optional(), include: FacturaIncludeObjectSchema.optional(), where: FacturaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FacturaFindUniqueOrThrowArgs>;

export const FacturaFindUniqueOrThrowZodSchema = z.object({ select: FacturaSelectObjectSchema.optional(), include: FacturaIncludeObjectSchema.optional(), where: FacturaWhereUniqueInputObjectSchema }).strict();