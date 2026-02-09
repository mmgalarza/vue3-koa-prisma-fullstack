import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idProducto: z.number().int().optional()
}).strict();
export const ProductosWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProductosWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosWhereUniqueInput>;
export const ProductosWhereUniqueInputObjectZodSchema = makeSchema();
