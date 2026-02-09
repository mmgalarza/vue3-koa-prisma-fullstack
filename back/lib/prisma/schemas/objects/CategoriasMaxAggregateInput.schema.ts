import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idCategoria: z.literal(true).optional(),
  nombre: z.literal(true).optional(),
  descripcion: z.literal(true).optional(),
  icono: z.literal(true).optional(),
  activo: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const CategoriasMaxAggregateInputObjectSchema: z.ZodType<Prisma.CategoriasMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasMaxAggregateInputType>;
export const CategoriasMaxAggregateInputObjectZodSchema = makeSchema();
