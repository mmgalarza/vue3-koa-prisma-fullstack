import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idUsuarioEmpresa: z.literal(true).optional(),
  idUsuario: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional(),
  rol: z.literal(true).optional()
}).strict();
export const UsuarioEmpresaMaxAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaMaxAggregateInputType>;
export const UsuarioEmpresaMaxAggregateInputObjectZodSchema = makeSchema();
