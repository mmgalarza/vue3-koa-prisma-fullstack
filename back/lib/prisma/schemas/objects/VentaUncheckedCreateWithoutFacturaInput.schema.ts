import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetUncheckedCreateNestedManyWithoutVentaInputObjectSchema as VentaDetUncheckedCreateNestedManyWithoutVentaInputObjectSchema } from './VentaDetUncheckedCreateNestedManyWithoutVentaInput.schema';
import { RegistroUncheckedCreateNestedManyWithoutVentaInputObjectSchema as RegistroUncheckedCreateNestedManyWithoutVentaInputObjectSchema } from './RegistroUncheckedCreateNestedManyWithoutVentaInput.schema'

const makeSchema = () => z.object({
  idVenta: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  estado: z.string(),
  idEmpresa: z.number().int(),
  idCliente: z.number().int(),
  idListaPvp: z.number().int(),
  detalles: z.lazy(() => VentaDetUncheckedCreateNestedManyWithoutVentaInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroUncheckedCreateNestedManyWithoutVentaInputObjectSchema).optional()
}).strict();
export const VentaUncheckedCreateWithoutFacturaInputObjectSchema: z.ZodType<Prisma.VentaUncheckedCreateWithoutFacturaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUncheckedCreateWithoutFacturaInput>;
export const VentaUncheckedCreateWithoutFacturaInputObjectZodSchema = makeSchema();
