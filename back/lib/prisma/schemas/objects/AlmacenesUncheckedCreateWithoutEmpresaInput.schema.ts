import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetUncheckedCreateNestedManyWithoutAlmacenInputObjectSchema as RegistroDetUncheckedCreateNestedManyWithoutAlmacenInputObjectSchema } from './RegistroDetUncheckedCreateNestedManyWithoutAlmacenInput.schema'

const makeSchema = () => z.object({
  idAlmacen: z.number().int().optional(),
  nombre: z.string(),
  interno: z.boolean().optional(),
  calle: z.string().optional(),
  numero: z.string().optional().nullable(),
  ciudad: z.string().optional(),
  provincia: z.string().optional(),
  codigoPostal: z.string().optional(),
  pais: z.string().optional(),
  responsable: z.string().optional().nullable(),
  activo: z.boolean().optional(),
  registrosDet: z.lazy(() => RegistroDetUncheckedCreateNestedManyWithoutAlmacenInputObjectSchema).optional()
}).strict();
export const AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.AlmacenesUncheckedCreateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesUncheckedCreateWithoutEmpresaInput>;
export const AlmacenesUncheckedCreateWithoutEmpresaInputObjectZodSchema = makeSchema();
