import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateNestedOneWithoutVentasInputObjectSchema as EmpresasCreateNestedOneWithoutVentasInputObjectSchema } from './EmpresasCreateNestedOneWithoutVentasInput.schema';
import { ClientesCreateNestedOneWithoutVentasInputObjectSchema as ClientesCreateNestedOneWithoutVentasInputObjectSchema } from './ClientesCreateNestedOneWithoutVentasInput.schema';
import { VentaDetCreateNestedManyWithoutVentaInputObjectSchema as VentaDetCreateNestedManyWithoutVentaInputObjectSchema } from './VentaDetCreateNestedManyWithoutVentaInput.schema';
import { FacturaCreateNestedOneWithoutVentaInputObjectSchema as FacturaCreateNestedOneWithoutVentaInputObjectSchema } from './FacturaCreateNestedOneWithoutVentaInput.schema';
import { RegistroCreateNestedManyWithoutVentaInputObjectSchema as RegistroCreateNestedManyWithoutVentaInputObjectSchema } from './RegistroCreateNestedManyWithoutVentaInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date().optional(),
  estado: z.string().max(20),
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutVentasInputObjectSchema),
  cliente: z.lazy(() => ClientesCreateNestedOneWithoutVentasInputObjectSchema),
  detalles: z.lazy(() => VentaDetCreateNestedManyWithoutVentaInputObjectSchema).optional(),
  factura: z.lazy(() => FacturaCreateNestedOneWithoutVentaInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroCreateNestedManyWithoutVentaInputObjectSchema).optional()
}).strict();
export const VentaCreateWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.VentaCreateWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateWithoutListaPvpInput>;
export const VentaCreateWithoutListaPvpInputObjectZodSchema = makeSchema();
