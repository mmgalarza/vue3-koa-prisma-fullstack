import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema as ListasDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './ListasDetUncheckedCreateNestedManyWithoutProductoInput.schema';
import { ListaPvpDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema as ListaPvpDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './ListaPvpDetUncheckedCreateNestedManyWithoutProductoInput.schema';
import { VentaDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema as VentaDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './VentaDetUncheckedCreateNestedManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  idProducto: z.number().int().optional(),
  nombre: z.string(),
  idCategoria: z.number().int().optional(),
  descripcion: z.string().optional().nullable(),
  imagen: z.string().optional().nullable(),
  codigo: z.string().optional().nullable(),
  unidad: z.string().optional().nullable(),
  activo: z.boolean().optional(),
  listasDet: z.lazy(() => ListasDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  listaPvpDet: z.lazy(() => ListaPvpDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  ventaDet: z.lazy(() => VentaDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema: z.ZodType<Prisma.ProductosUncheckedCreateWithoutRegistroDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUncheckedCreateWithoutRegistroDetInput>;
export const ProductosUncheckedCreateWithoutRegistroDetInputObjectZodSchema = makeSchema();
