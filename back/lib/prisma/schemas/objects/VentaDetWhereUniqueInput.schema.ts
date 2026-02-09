import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVentaDet: z.number().int().optional()
}).strict();
export const VentaDetWhereUniqueInputObjectSchema: z.ZodType<Prisma.VentaDetWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetWhereUniqueInput>;
export const VentaDetWhereUniqueInputObjectZodSchema = makeSchema();
