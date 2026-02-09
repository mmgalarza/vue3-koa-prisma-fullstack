import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroUncheckedCreateNestedManyWithoutActividadInputObjectSchema as RegistroUncheckedCreateNestedManyWithoutActividadInputObjectSchema } from './RegistroUncheckedCreateNestedManyWithoutActividadInput.schema'

const makeSchema = () => z.object({
  idActividad: z.number().int().optional(),
  idEmpresa: z.number().int().optional(),
  nombre: z.string().max(80),
  inicio: z.coerce.date().optional(),
  fin: z.coerce.date().optional(),
  estado: z.string().max(20).optional(),
  activa: z.boolean().optional(),
  registros: z.lazy(() => RegistroUncheckedCreateNestedManyWithoutActividadInputObjectSchema).optional()
}).strict();
export const ActividadUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ActividadUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadUncheckedCreateInput>;
export const ActividadUncheckedCreateInputObjectZodSchema = makeSchema();
