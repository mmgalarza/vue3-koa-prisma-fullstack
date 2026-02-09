import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idProveedor: z.literal(true).optional(),
  nombre: z.literal(true).optional(),
  email: z.literal(true).optional(),
  calle: z.literal(true).optional(),
  numero: z.literal(true).optional(),
  ciudad: z.literal(true).optional(),
  provincia: z.literal(true).optional(),
  codigoPostal: z.literal(true).optional(),
  pais: z.literal(true).optional(),
  contacto: z.literal(true).optional(),
  activo: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProveedoresCountAggregateInputObjectSchema: z.ZodType<Prisma.ProveedoresCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresCountAggregateInputType>;
export const ProveedoresCountAggregateInputObjectZodSchema = makeSchema();
