import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idUsuario: z.literal(true).optional()
}).strict();
export const UsuariosSumAggregateInputObjectSchema: z.ZodType<Prisma.UsuariosSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosSumAggregateInputType>;
export const UsuariosSumAggregateInputObjectZodSchema = makeSchema();
