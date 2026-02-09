import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroUncheckedCreateNestedManyWithoutActividadInputObjectSchema as RegistroUncheckedCreateNestedManyWithoutActividadInputObjectSchema } from './RegistroUncheckedCreateNestedManyWithoutActividadInput.schema'

const makeSchema = () => z.object({
  idActividad: z.number().int().optional(),
  nombre: z.string(),
  inicio: z.coerce.date().optional(),
  fin: z.coerce.date().optional(),
  estado: z.string().optional(),
  activa: z.boolean().optional(),
  registros: z.lazy(() => RegistroUncheckedCreateNestedManyWithoutActividadInputObjectSchema).optional()
}).strict();
export const ActividadUncheckedCreateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ActividadUncheckedCreateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadUncheckedCreateWithoutEmpresaInput>;
export const ActividadUncheckedCreateWithoutEmpresaInputObjectZodSchema = makeSchema();
