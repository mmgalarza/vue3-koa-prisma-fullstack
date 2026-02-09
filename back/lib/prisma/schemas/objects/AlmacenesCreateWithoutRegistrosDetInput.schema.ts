import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateNestedOneWithoutAlmacenesInputObjectSchema as EmpresasCreateNestedOneWithoutAlmacenesInputObjectSchema } from './EmpresasCreateNestedOneWithoutAlmacenesInput.schema'

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
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutAlmacenesInputObjectSchema).optional()
}).strict();
export const AlmacenesCreateWithoutRegistrosDetInputObjectSchema: z.ZodType<Prisma.AlmacenesCreateWithoutRegistrosDetInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesCreateWithoutRegistrosDetInput>;
export const AlmacenesCreateWithoutRegistrosDetInputObjectZodSchema = makeSchema();
