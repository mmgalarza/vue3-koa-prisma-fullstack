import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idLista: z.literal(true).optional(),
  idProveedor: z.literal(true).optional(),
  refNo: z.literal(true).optional(),
  fecha: z.literal(true).optional(),
  observacion: z.literal(true).optional()
}).strict();
export const ListasMaxAggregateInputObjectSchema: z.ZodType<Prisma.ListasMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ListasMaxAggregateInputType>;
export const ListasMaxAggregateInputObjectZodSchema = makeSchema();
