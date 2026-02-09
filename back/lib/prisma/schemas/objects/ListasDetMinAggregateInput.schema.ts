import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idListaDet: z.literal(true).optional(),
  idLista: z.literal(true).optional(),
  idProducto: z.literal(true).optional(),
  precio: z.literal(true).optional(),
  descuento: z.literal(true).optional()
}).strict();
export const ListasDetMinAggregateInputObjectSchema: z.ZodType<Prisma.ListasDetMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetMinAggregateInputType>;
export const ListasDetMinAggregateInputObjectZodSchema = makeSchema();
