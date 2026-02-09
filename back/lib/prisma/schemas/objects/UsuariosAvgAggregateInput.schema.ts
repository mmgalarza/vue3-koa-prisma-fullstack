import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idUsuario: z.literal(true).optional()
}).strict();
export const UsuariosAvgAggregateInputObjectSchema: z.ZodType<Prisma.UsuariosAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosAvgAggregateInputType>;
export const UsuariosAvgAggregateInputObjectZodSchema = makeSchema();
