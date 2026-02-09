import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idProveedor: z.number().int().optional()
}).strict();
export const ProveedoresWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProveedoresWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresWhereUniqueInput>;
export const ProveedoresWhereUniqueInputObjectZodSchema = makeSchema();
