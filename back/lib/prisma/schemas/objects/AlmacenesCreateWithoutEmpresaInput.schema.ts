import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetCreateNestedManyWithoutAlmacenInputObjectSchema as RegistroDetCreateNestedManyWithoutAlmacenInputObjectSchema } from './RegistroDetCreateNestedManyWithoutAlmacenInput.schema'

const makeSchema = () => z.object({
  nombre: z.string().max(80),
  interno: z.boolean().optional(),
  calle: z.string().optional(),
  numero: z.string().optional().nullable(),
  ciudad: z.string().optional(),
  provincia: z.string().optional(),
  codigoPostal: z.string().optional(),
  pais: z.string().optional(),
  responsable: z.string().max(80).optional().nullable(),
  activo: z.boolean().optional(),
  registrosDet: z.lazy(() => RegistroDetCreateNestedManyWithoutAlmacenInputObjectSchema).optional()
}).strict();
export const AlmacenesCreateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.AlmacenesCreateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesCreateWithoutEmpresaInput>;
export const AlmacenesCreateWithoutEmpresaInputObjectZodSchema = makeSchema();
