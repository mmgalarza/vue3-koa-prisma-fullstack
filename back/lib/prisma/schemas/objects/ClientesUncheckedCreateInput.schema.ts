import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaUncheckedCreateNestedManyWithoutClienteInputObjectSchema as VentaUncheckedCreateNestedManyWithoutClienteInputObjectSchema } from './VentaUncheckedCreateNestedManyWithoutClienteInput.schema'

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
  idEmpresa: z.number().int(),
  ventas: z.lazy(() => VentaUncheckedCreateNestedManyWithoutClienteInputObjectSchema).optional()
}).strict();
export const ClientesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ClientesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesUncheckedCreateInput>;
export const ClientesUncheckedCreateInputObjectZodSchema = makeSchema();
