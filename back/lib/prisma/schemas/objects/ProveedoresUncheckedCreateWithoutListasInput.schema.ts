import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idProveedor: z.number().int().optional(),
  nombre: z.string(),
  email: z.string().optional().nullable(),
  calle: z.string().optional(),
  numero: z.string().optional().nullable(),
  ciudad: z.string().optional(),
  provincia: z.string().optional(),
  codigoPostal: z.string().optional(),
  pais: z.string().optional(),
  contacto: z.string().optional().nullable(),
  activo: z.boolean().optional(),
  idEmpresa: z.number().int().optional()
}).strict();
export const ProveedoresUncheckedCreateWithoutListasInputObjectSchema: z.ZodType<Prisma.ProveedoresUncheckedCreateWithoutListasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresUncheckedCreateWithoutListasInput>;
export const ProveedoresUncheckedCreateWithoutListasInputObjectZodSchema = makeSchema();
