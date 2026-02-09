import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocCreateNestedOneWithoutRegistrosInputObjectSchema as TiposDocCreateNestedOneWithoutRegistrosInputObjectSchema } from './TiposDocCreateNestedOneWithoutRegistrosInput.schema';
import { VentaCreateNestedOneWithoutRegistrosInputObjectSchema as VentaCreateNestedOneWithoutRegistrosInputObjectSchema } from './VentaCreateNestedOneWithoutRegistrosInput.schema';
import { RegistroDetCreateNestedManyWithoutRegistroInputObjectSchema as RegistroDetCreateNestedManyWithoutRegistroInputObjectSchema } from './RegistroDetCreateNestedManyWithoutRegistroInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date().optional(),
  numero: z.string().max(20).optional(),
  tipoDoc: z.lazy(() => TiposDocCreateNestedOneWithoutRegistrosInputObjectSchema),
  venta: z.lazy(() => VentaCreateNestedOneWithoutRegistrosInputObjectSchema).optional(),
  detalles: z.lazy(() => RegistroDetCreateNestedManyWithoutRegistroInputObjectSchema).optional()
}).strict();
export const RegistroCreateWithoutActividadInputObjectSchema: z.ZodType<Prisma.RegistroCreateWithoutActividadInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateWithoutActividadInput>;
export const RegistroCreateWithoutActividadInputObjectZodSchema = makeSchema();
