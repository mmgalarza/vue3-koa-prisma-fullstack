import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVenta: z.number().int().optional()
}).strict();
export const FacturaWhereUniqueInputObjectSchema: z.ZodType<Prisma.FacturaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaWhereUniqueInput>;
export const FacturaWhereUniqueInputObjectZodSchema = makeSchema();
