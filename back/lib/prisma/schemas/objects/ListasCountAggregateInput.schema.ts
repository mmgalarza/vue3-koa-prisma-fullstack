import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idLista: z.literal(true).optional(),
  idProveedor: z.literal(true).optional(),
  refNo: z.literal(true).optional(),
  fecha: z.literal(true).optional(),
  observacion: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ListasCountAggregateInputObjectSchema: z.ZodType<Prisma.ListasCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ListasCountAggregateInputType>;
export const ListasCountAggregateInputObjectZodSchema = makeSchema();
