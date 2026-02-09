import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idUsuarioEmpresa: z.literal(true).optional(),
  idUsuario: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const UsuarioEmpresaAvgAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaAvgAggregateInputType>;
export const UsuarioEmpresaAvgAggregateInputObjectZodSchema = makeSchema();
