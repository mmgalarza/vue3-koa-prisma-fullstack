import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetUncheckedCreateNestedManyWithoutRegistroInputObjectSchema as RegistroDetUncheckedCreateNestedManyWithoutRegistroInputObjectSchema } from './RegistroDetUncheckedCreateNestedManyWithoutRegistroInput.schema'

const makeSchema = () => z.object({
  idRegistro: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  numero: z.string().optional(),
  idTipoDoc: z.string(),
  idActividad: z.number().int().optional().nullable(),
  detalles: z.lazy(() => RegistroDetUncheckedCreateNestedManyWithoutRegistroInputObjectSchema).optional()
}).strict();
export const RegistroUncheckedCreateWithoutVentaInputObjectSchema: z.ZodType<Prisma.RegistroUncheckedCreateWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUncheckedCreateWithoutVentaInput>;
export const RegistroUncheckedCreateWithoutVentaInputObjectZodSchema = makeSchema();
