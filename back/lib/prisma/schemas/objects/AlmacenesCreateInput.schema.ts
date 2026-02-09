import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateNestedOneWithoutAlmacenesInputObjectSchema as EmpresasCreateNestedOneWithoutAlmacenesInputObjectSchema } from './EmpresasCreateNestedOneWithoutAlmacenesInput.schema';
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
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutAlmacenesInputObjectSchema),
  registrosDet: z.lazy(() => RegistroDetCreateNestedManyWithoutAlmacenInputObjectSchema).optional()
}).strict();
export const AlmacenesCreateInputObjectSchema: z.ZodType<Prisma.AlmacenesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesCreateInput>;
export const AlmacenesCreateInputObjectZodSchema = makeSchema();
