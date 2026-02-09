import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idCliente: z.number().int().optional()
}).strict();
export const ClientesWhereUniqueInputObjectSchema: z.ZodType<Prisma.ClientesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesWhereUniqueInput>;
export const ClientesWhereUniqueInputObjectZodSchema = makeSchema();
