import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocCreateNestedOneWithoutRegistrosInputObjectSchema as TiposDocCreateNestedOneWithoutRegistrosInputObjectSchema } from './TiposDocCreateNestedOneWithoutRegistrosInput.schema';
import { VentaCreateNestedOneWithoutRegistrosInputObjectSchema as VentaCreateNestedOneWithoutRegistrosInputObjectSchema } from './VentaCreateNestedOneWithoutRegistrosInput.schema';
import { ActividadCreateNestedOneWithoutRegistrosInputObjectSchema as ActividadCreateNestedOneWithoutRegistrosInputObjectSchema } from './ActividadCreateNestedOneWithoutRegistrosInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date().optional(),
  numero: z.string().max(20).optional(),
  tipoDoc: z.lazy(() => TiposDocCreateNestedOneWithoutRegistrosInputObjectSchema),
  venta: z.lazy(() => VentaCreateNestedOneWithoutRegistrosInputObjectSchema).optional(),
  actividad: z.lazy(() => ActividadCreateNestedOneWithoutRegistrosInputObjectSchema).optional()
}).strict();
export const RegistroCreateWithoutDetallesInputObjectSchema: z.ZodType<Prisma.RegistroCreateWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateWithoutDetallesInput>;
export const RegistroCreateWithoutDetallesInputObjectZodSchema = makeSchema();
