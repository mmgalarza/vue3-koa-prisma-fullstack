import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idCliente: z.number().int().optional(),
  nombre: z.string().max(120),
  email: z.string().max(100).optional().nullable(),
  calle: z.string().optional(),
  numero: z.string().optional().nullable(),
  ciudad: z.string().optional(),
  provincia: z.string().optional(),
  codigoPostal: z.string().optional(),
  pais: z.string().optional(),
  contacto: z.string().max(80).optional().nullable(),
  activo: z.boolean().optional(),
  idEmpresa: z.number().int()
}).strict();
export const ClientesCreateManyInputObjectSchema: z.ZodType<Prisma.ClientesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesCreateManyInput>;
export const ClientesCreateManyInputObjectZodSchema = makeSchema();
