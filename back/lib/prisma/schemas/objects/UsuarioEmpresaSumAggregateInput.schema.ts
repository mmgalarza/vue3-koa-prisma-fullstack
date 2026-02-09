import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idUsuarioEmpresa: z.literal(true).optional(),
  idUsuario: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const UsuarioEmpresaSumAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaSumAggregateInputType>;
export const UsuarioEmpresaSumAggregateInputObjectZodSchema = makeSchema();
