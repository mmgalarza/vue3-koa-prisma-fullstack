import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesCreateNestedOneWithoutVentasInputObjectSchema as ClientesCreateNestedOneWithoutVentasInputObjectSchema } from './ClientesCreateNestedOneWithoutVentasInput.schema';
import { ListaPvpCreateNestedOneWithoutVentasInputObjectSchema as ListaPvpCreateNestedOneWithoutVentasInputObjectSchema } from './ListaPvpCreateNestedOneWithoutVentasInput.schema';
import { VentaDetCreateNestedManyWithoutVentaInputObjectSchema as VentaDetCreateNestedManyWithoutVentaInputObjectSchema } from './VentaDetCreateNestedManyWithoutVentaInput.schema';
import { FacturaCreateNestedOneWithoutVentaInputObjectSchema as FacturaCreateNestedOneWithoutVentaInputObjectSchema } from './FacturaCreateNestedOneWithoutVentaInput.schema';
import { RegistroCreateNestedManyWithoutVentaInputObjectSchema as RegistroCreateNestedManyWithoutVentaInputObjectSchema } from './RegistroCreateNestedManyWithoutVentaInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date().optional(),
  estado: z.string().max(20),
  cliente: z.lazy(() => ClientesCreateNestedOneWithoutVentasInputObjectSchema),
  listaPvp: z.lazy(() => ListaPvpCreateNestedOneWithoutVentasInputObjectSchema),
  detalles: z.lazy(() => VentaDetCreateNestedManyWithoutVentaInputObjectSchema).optional(),
  factura: z.lazy(() => FacturaCreateNestedOneWithoutVentaInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroCreateNestedManyWithoutVentaInputObjectSchema).optional()
}).strict();
export const VentaCreateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.VentaCreateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateWithoutEmpresaInput>;
export const VentaCreateWithoutEmpresaInputObjectZodSchema = makeSchema();
