import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idUsuarioEmpresa: z.literal(true).optional(),
  idUsuario: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional(),
  rol: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UsuarioEmpresaCountAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaCountAggregateInputType>;
export const UsuarioEmpresaCountAggregateInputObjectZodSchema = makeSchema();
