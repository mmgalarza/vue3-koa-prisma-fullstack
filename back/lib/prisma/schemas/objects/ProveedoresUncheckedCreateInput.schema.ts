import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasUncheckedCreateNestedManyWithoutProveedorInputObjectSchema as ListasUncheckedCreateNestedManyWithoutProveedorInputObjectSchema } from './ListasUncheckedCreateNestedManyWithoutProveedorInput.schema'

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
  activo: z.boolean().optional(),
  idEmpresa: z.number().int().optional(),
  listas: z.lazy(() => ListasUncheckedCreateNestedManyWithoutProveedorInputObjectSchema).optional()
}).strict();
export const ProveedoresUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProveedoresUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresUncheckedCreateInput>;
export const ProveedoresUncheckedCreateInputObjectZodSchema = makeSchema();
