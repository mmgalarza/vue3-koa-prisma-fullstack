import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateNestedOneWithoutVentasInputObjectSchema as EmpresasCreateNestedOneWithoutVentasInputObjectSchema } from './EmpresasCreateNestedOneWithoutVentasInput.schema';
import { ClientesCreateNestedOneWithoutVentasInputObjectSchema as ClientesCreateNestedOneWithoutVentasInputObjectSchema } from './ClientesCreateNestedOneWithoutVentasInput.schema';
import { ListaPvpCreateNestedOneWithoutVentasInputObjectSchema as ListaPvpCreateNestedOneWithoutVentasInputObjectSchema } from './ListaPvpCreateNestedOneWithoutVentasInput.schema';
import { VentaDetCreateNestedManyWithoutVentaInputObjectSchema as VentaDetCreateNestedManyWithoutVentaInputObjectSchema } from './VentaDetCreateNestedManyWithoutVentaInput.schema';
import { RegistroCreateNestedManyWithoutVentaInputObjectSchema as RegistroCreateNestedManyWithoutVentaInputObjectSchema } from './RegistroCreateNestedManyWithoutVentaInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date().optional(),
  estado: z.string().max(20),
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutVentasInputObjectSchema),
  cliente: z.lazy(() => ClientesCreateNestedOneWithoutVentasInputObjectSchema),
  listaPvp: z.lazy(() => ListaPvpCreateNestedOneWithoutVentasInputObjectSchema),
  detalles: z.lazy(() => VentaDetCreateNestedManyWithoutVentaInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroCreateNestedManyWithoutVentaInputObjectSchema).optional()
}).strict();
export const VentaCreateWithoutFacturaInputObjectSchema: z.ZodType<Prisma.VentaCreateWithoutFacturaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateWithoutFacturaInput>;
export const VentaCreateWithoutFacturaInputObjectZodSchema = makeSchema();
