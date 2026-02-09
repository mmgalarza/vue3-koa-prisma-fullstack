import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaSelectObjectSchema as VentaSelectObjectSchema } from './objects/VentaSelect.schema';
import { VentaIncludeObjectSchema as VentaIncludeObjectSchema } from './objects/VentaInclude.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './objects/VentaWhereUniqueInput.schema';

export const VentaFindUniqueOrThrowSchema: z.ZodType<Prisma.VentaFindUniqueOrThrowArgs> = z.object({ select: VentaSelectObjectSchema.optional(), include: VentaIncludeObjectSchema.optional(), where: VentaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VentaFindUniqueOrThrowArgs>;

export const VentaFindUniqueOrThrowZodSchema = z.object({ select: VentaSelectObjectSchema.optional(), include: VentaIncludeObjectSchema.optional(), where: VentaWhereUniqueInputObjectSchema }).strict();