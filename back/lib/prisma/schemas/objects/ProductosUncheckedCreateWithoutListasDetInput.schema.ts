import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema as ListaPvpDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './ListaPvpDetUncheckedCreateNestedManyWithoutProductoInput.schema';
import { VentaDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema as VentaDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './VentaDetUncheckedCreateNestedManyWithoutProductoInput.schema';
import { RegistroDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema as RegistroDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './RegistroDetUncheckedCreateNestedManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  idProducto: z.number().int().optional(),
  nombre: z.string(),
  idCategoria: z.number().int().optional(),
  descripcion: z.string().optional().nullable(),
  imagen: z.string().optional().nullable(),
  codigo: z.string().optional().nullable(),
  unidad: z.string().optional().nullable(),
  activo: z.boolean().optional(),
  listaPvpDet: z.lazy(() => ListaPvpDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  ventaDet: z.lazy(() => VentaDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  registroDet: z.lazy(() => RegistroDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductosUncheckedCreateWithoutListasDetInputObjectSchema: z.ZodType<Prisma.ProductosUncheckedCreateWithoutListasDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUncheckedCreateWithoutListasDetInput>;
export const ProductosUncheckedCreateWithoutListasDetInputObjectZodSchema = makeSchema();
