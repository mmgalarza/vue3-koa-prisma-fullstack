import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idAlmacen: z.literal(true).optional(),
  nombre: z.literal(true).optional(),
  interno: z.literal(true).optional(),
  calle: z.literal(true).optional(),
  numero: z.literal(true).optional(),
  ciudad: z.literal(true).optional(),
  provincia: z.literal(true).optional(),
  codigoPostal: z.literal(true).optional(),
  pais: z.literal(true).optional(),
  responsable: z.literal(true).optional(),
  activo: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const AlmacenesMinAggregateInputObjectSchema: z.ZodType<Prisma.AlmacenesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesMinAggregateInputType>;
export const AlmacenesMinAggregateInputObjectZodSchema = makeSchema();
