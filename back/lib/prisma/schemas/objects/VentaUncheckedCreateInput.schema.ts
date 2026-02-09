import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetUncheckedCreateNestedManyWithoutVentaInputObjectSchema as VentaDetUncheckedCreateNestedManyWithoutVentaInputObjectSchema } from './VentaDetUncheckedCreateNestedManyWithoutVentaInput.schema';
import { FacturaUncheckedCreateNestedOneWithoutVentaInputObjectSchema as FacturaUncheckedCreateNestedOneWithoutVentaInputObjectSchema } from './FacturaUncheckedCreateNestedOneWithoutVentaInput.schema';
import { RegistroUncheckedCreateNestedManyWithoutVentaInputObjectSchema as RegistroUncheckedCreateNestedManyWithoutVentaInputObjectSchema } from './RegistroUncheckedCreateNestedManyWithoutVentaInput.schema'

const makeSchema = () => z.object({
  idVenta: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  estado: z.string().max(20),
  idEmpresa: z.number().int(),
  idCliente: z.number().int(),
  idListaPvp: z.number().int(),
  detalles: z.lazy(() => VentaDetUncheckedCreateNestedManyWithoutVentaInputObjectSchema).optional(),
  factura: z.lazy(() => FacturaUncheckedCreateNestedOneWithoutVentaInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroUncheckedCreateNestedManyWithoutVentaInputObjectSchema).optional()
}).strict();
export const VentaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.VentaUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUncheckedCreateInput>;
export const VentaUncheckedCreateInputObjectZodSchema = makeSchema();
