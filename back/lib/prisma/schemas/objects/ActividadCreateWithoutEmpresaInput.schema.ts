import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCreateNestedManyWithoutActividadInputObjectSchema as RegistroCreateNestedManyWithoutActividadInputObjectSchema } from './RegistroCreateNestedManyWithoutActividadInput.schema'

const makeSchema = () => z.object({
  nombre: z.string().max(80),
  inicio: z.coerce.date().optional(),
  fin: z.coerce.date().optional(),
  estado: z.string().max(20).optional(),
  activa: z.boolean().optional(),
  registros: z.lazy(() => RegistroCreateNestedManyWithoutActividadInputObjectSchema).optional()
}).strict();
export const ActividadCreateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ActividadCreateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadCreateWithoutEmpresaInput>;
export const ActividadCreateWithoutEmpresaInputObjectZodSchema = makeSchema();
