import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocCreateNestedOneWithoutRegistrosInputObjectSchema as TiposDocCreateNestedOneWithoutRegistrosInputObjectSchema } from './TiposDocCreateNestedOneWithoutRegistrosInput.schema';
import { ActividadCreateNestedOneWithoutRegistrosInputObjectSchema as ActividadCreateNestedOneWithoutRegistrosInputObjectSchema } from './ActividadCreateNestedOneWithoutRegistrosInput.schema';
import { RegistroDetCreateNestedManyWithoutRegistroInputObjectSchema as RegistroDetCreateNestedManyWithoutRegistroInputObjectSchema } from './RegistroDetCreateNestedManyWithoutRegistroInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date().optional(),
  numero: z.string().max(20).optional(),
  tipoDoc: z.lazy(() => TiposDocCreateNestedOneWithoutRegistrosInputObjectSchema),
  actividad: z.lazy(() => ActividadCreateNestedOneWithoutRegistrosInputObjectSchema).optional(),
  detalles: z.lazy(() => RegistroDetCreateNestedManyWithoutRegistroInputObjectSchema).optional()
}).strict();
export const RegistroCreateWithoutVentaInputObjectSchema: z.ZodType<Prisma.RegistroCreateWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateWithoutVentaInput>;
export const RegistroCreateWithoutVentaInputObjectZodSchema = makeSchema();
