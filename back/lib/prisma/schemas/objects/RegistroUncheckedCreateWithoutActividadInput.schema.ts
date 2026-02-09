import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetUncheckedCreateNestedManyWithoutRegistroInputObjectSchema as RegistroDetUncheckedCreateNestedManyWithoutRegistroInputObjectSchema } from './RegistroDetUncheckedCreateNestedManyWithoutRegistroInput.schema'

const makeSchema = () => z.object({
  idRegistro: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  numero: z.string().optional(),
  idTipoDoc: z.string(),
  idVenta: z.number().int().optional().nullable(),
  detalles: z.lazy(() => RegistroDetUncheckedCreateNestedManyWithoutRegistroInputObjectSchema).optional()
}).strict();
export const RegistroUncheckedCreateWithoutActividadInputObjectSchema: z.ZodType<Prisma.RegistroUncheckedCreateWithoutActividadInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUncheckedCreateWithoutActividadInput>;
export const RegistroUncheckedCreateWithoutActividadInputObjectZodSchema = makeSchema();
