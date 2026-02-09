import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateNestedOneWithoutClientesInputObjectSchema as EmpresasCreateNestedOneWithoutClientesInputObjectSchema } from './EmpresasCreateNestedOneWithoutClientesInput.schema'

const makeSchema = () => z.object({
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
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutClientesInputObjectSchema)
}).strict();
export const ClientesCreateWithoutVentasInputObjectSchema: z.ZodType<Prisma.ClientesCreateWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesCreateWithoutVentasInput>;
export const ClientesCreateWithoutVentasInputObjectZodSchema = makeSchema();
