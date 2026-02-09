import * as z from 'zod';
import type { Prisma } from '../../client';
import { FacturaUncheckedCreateNestedOneWithoutVentaInputObjectSchema as FacturaUncheckedCreateNestedOneWithoutVentaInputObjectSchema } from './FacturaUncheckedCreateNestedOneWithoutVentaInput.schema';
import { RegistroUncheckedCreateNestedManyWithoutVentaInputObjectSchema as RegistroUncheckedCreateNestedManyWithoutVentaInputObjectSchema } from './RegistroUncheckedCreateNestedManyWithoutVentaInput.schema'

const makeSchema = () => z.object({
  idVenta: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  estado: z.string(),
  idEmpresa: z.number().int(),
  idCliente: z.number().int(),
  idListaPvp: z.number().int(),
  factura: z.lazy(() => FacturaUncheckedCreateNestedOneWithoutVentaInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroUncheckedCreateNestedManyWithoutVentaInputObjectSchema).optional()
}).strict();
export const VentaUncheckedCreateWithoutDetallesInputObjectSchema: z.ZodType<Prisma.VentaUncheckedCreateWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUncheckedCreateWithoutDetallesInput>;
export const VentaUncheckedCreateWithoutDetallesInputObjectZodSchema = makeSchema();
