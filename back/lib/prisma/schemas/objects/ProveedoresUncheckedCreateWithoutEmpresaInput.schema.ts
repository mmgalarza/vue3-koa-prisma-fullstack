import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasUncheckedCreateNestedManyWithoutProveedorInputObjectSchema as ListasUncheckedCreateNestedManyWithoutProveedorInputObjectSchema } from './ListasUncheckedCreateNestedManyWithoutProveedorInput.schema'

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
  listas: z.lazy(() => ListasUncheckedCreateNestedManyWithoutProveedorInputObjectSchema).optional()
}).strict();
export const ProveedoresUncheckedCreateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ProveedoresUncheckedCreateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresUncheckedCreateWithoutEmpresaInput>;
export const ProveedoresUncheckedCreateWithoutEmpresaInputObjectZodSchema = makeSchema();
