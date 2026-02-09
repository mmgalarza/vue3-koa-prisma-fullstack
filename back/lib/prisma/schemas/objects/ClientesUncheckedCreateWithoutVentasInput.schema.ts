import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idCliente: z.number().int().optional(),
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
  idEmpresa: z.number().int()
}).strict();
export const ClientesUncheckedCreateWithoutVentasInputObjectSchema: z.ZodType<Prisma.ClientesUncheckedCreateWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesUncheckedCreateWithoutVentasInput>;
export const ClientesUncheckedCreateWithoutVentasInputObjectZodSchema = makeSchema();
