import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idLista: z.literal(true).optional(),
  idProveedor: z.literal(true).optional()
}).strict();
export const ListasSumAggregateInputObjectSchema: z.ZodType<Prisma.ListasSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ListasSumAggregateInputType>;
export const ListasSumAggregateInputObjectZodSchema = makeSchema();
