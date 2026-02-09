import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idRegistro: z.literal(true).optional(),
  fecha: z.literal(true).optional(),
  numero: z.literal(true).optional(),
  idTipoDoc: z.literal(true).optional(),
  idVenta: z.literal(true).optional(),
  idActividad: z.literal(true).optional()
}).strict();
export const RegistroMaxAggregateInputObjectSchema: z.ZodType<Prisma.RegistroMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RegistroMaxAggregateInputType>;
export const RegistroMaxAggregateInputObjectZodSchema = makeSchema();
