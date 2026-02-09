import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateNestedOneWithoutProveedoresInputObjectSchema as EmpresasCreateNestedOneWithoutProveedoresInputObjectSchema } from './EmpresasCreateNestedOneWithoutProveedoresInput.schema'

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
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutProveedoresInputObjectSchema).optional()
}).strict();
export const ProveedoresCreateWithoutListasInputObjectSchema: z.ZodType<Prisma.ProveedoresCreateWithoutListasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresCreateWithoutListasInput>;
export const ProveedoresCreateWithoutListasInputObjectZodSchema = makeSchema();
