import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVenta: z.number().int().optional()
}).strict();
export const VentaWhereUniqueInputObjectSchema: z.ZodType<Prisma.VentaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaWhereUniqueInput>;
export const VentaWhereUniqueInputObjectZodSchema = makeSchema();
