import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idActividad: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional(),
  nombre: z.literal(true).optional(),
  inicio: z.literal(true).optional(),
  fin: z.literal(true).optional(),
  estado: z.literal(true).optional(),
  activa: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ActividadCountAggregateInputObjectSchema: z.ZodType<Prisma.ActividadCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActividadCountAggregateInputType>;
export const ActividadCountAggregateInputObjectZodSchema = makeSchema();
