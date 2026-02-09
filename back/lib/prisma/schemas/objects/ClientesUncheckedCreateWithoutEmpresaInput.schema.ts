import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaUncheckedCreateNestedManyWithoutClienteInputObjectSchema as VentaUncheckedCreateNestedManyWithoutClienteInputObjectSchema } from './VentaUncheckedCreateNestedManyWithoutClienteInput.schema'

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
  ventas: z.lazy(() => VentaUncheckedCreateNestedManyWithoutClienteInputObjectSchema).optional()
}).strict();
export const ClientesUncheckedCreateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ClientesUncheckedCreateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesUncheckedCreateWithoutEmpresaInput>;
export const ClientesUncheckedCreateWithoutEmpresaInputObjectZodSchema = makeSchema();
