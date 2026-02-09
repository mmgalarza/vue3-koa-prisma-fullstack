import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idProveedor: z.number().int().optional(),
  nombre: z.string().max(120),
  email: z.string().max(100).optional().nullable(),
  calle: z.string().optional(),
  numero: z.string().optional().nullable(),
  ciudad: z.string().optional(),
  provincia: z.string().optional(),
  codigoPostal: z.string().optional(),
  pais: z.string().optional(),
  contacto: z.string().max(80).optional().nullable(),
  activo: z.boolean().optional()
}).strict();
export const ProveedoresCreateManyEmpresaInputObjectSchema: z.ZodType<Prisma.ProveedoresCreateManyEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresCreateManyEmpresaInput>;
export const ProveedoresCreateManyEmpresaInputObjectZodSchema = makeSchema();
