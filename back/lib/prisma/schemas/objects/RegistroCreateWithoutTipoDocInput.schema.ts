import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateNestedOneWithoutRegistrosInputObjectSchema as VentaCreateNestedOneWithoutRegistrosInputObjectSchema } from './VentaCreateNestedOneWithoutRegistrosInput.schema';
import { ActividadCreateNestedOneWithoutRegistrosInputObjectSchema as ActividadCreateNestedOneWithoutRegistrosInputObjectSchema } from './ActividadCreateNestedOneWithoutRegistrosInput.schema';
import { RegistroDetCreateNestedManyWithoutRegistroInputObjectSchema as RegistroDetCreateNestedManyWithoutRegistroInputObjectSchema } from './RegistroDetCreateNestedManyWithoutRegistroInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date().optional(),
  numero: z.string().max(20).optional(),
  venta: z.lazy(() => VentaCreateNestedOneWithoutRegistrosInputObjectSchema).optional(),
  actividad: z.lazy(() => ActividadCreateNestedOneWithoutRegistrosInputObjectSchema).optional(),
  detalles: z.lazy(() => RegistroDetCreateNestedManyWithoutRegistroInputObjectSchema).optional()
}).strict();
export const RegistroCreateWithoutTipoDocInputObjectSchema: z.ZodType<Prisma.RegistroCreateWithoutTipoDocInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateWithoutTipoDocInput>;
export const RegistroCreateWithoutTipoDocInputObjectZodSchema = makeSchema();
