import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetUncheckedCreateNestedManyWithoutRegistroInputObjectSchema as RegistroDetUncheckedCreateNestedManyWithoutRegistroInputObjectSchema } from './RegistroDetUncheckedCreateNestedManyWithoutRegistroInput.schema'

const makeSchema = () => z.object({
  idRegistro: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  numero: z.string().optional(),
  idVenta: z.number().int().optional().nullable(),
  idActividad: z.number().int().optional().nullable(),
  detalles: z.lazy(() => RegistroDetUncheckedCreateNestedManyWithoutRegistroInputObjectSchema).optional()
}).strict();
export const RegistroUncheckedCreateWithoutTipoDocInputObjectSchema: z.ZodType<Prisma.RegistroUncheckedCreateWithoutTipoDocInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUncheckedCreateWithoutTipoDocInput>;
export const RegistroUncheckedCreateWithoutTipoDocInputObjectZodSchema = makeSchema();
