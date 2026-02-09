import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idAlmacen: z.number().int().optional(),
  nombre: z.string().max(80),
  interno: z.boolean().optional(),
  calle: z.string().optional(),
  numero: z.string().optional().nullable(),
  ciudad: z.string().optional(),
  provincia: z.string().optional(),
  codigoPostal: z.string().optional(),
  pais: z.string().optional(),
  responsable: z.string().max(80).optional().nullable(),
  activo: z.boolean().optional(),
  idEmpresa: z.number().int().optional()
}).strict();
export const AlmacenesCreateManyInputObjectSchema: z.ZodType<Prisma.AlmacenesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesCreateManyInput>;
export const AlmacenesCreateManyInputObjectZodSchema = makeSchema();
