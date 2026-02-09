import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema as ListasDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './ListasDetUncheckedCreateNestedManyWithoutProductoInput.schema';
import { ListaPvpDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema as ListaPvpDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './ListaPvpDetUncheckedCreateNestedManyWithoutProductoInput.schema';
import { VentaDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema as VentaDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './VentaDetUncheckedCreateNestedManyWithoutProductoInput.schema';
import { RegistroDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema as RegistroDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './RegistroDetUncheckedCreateNestedManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  idProducto: z.number().int().optional(),
  nombre: z.string().max(120),
  idCategoria: z.number().int().optional(),
  descripcion: z.string().max(200).optional().nullable(),
  imagen: z.string().max(100).optional().nullable(),
  codigo: z.string().max(40).optional().nullable(),
  unidad: z.string().max(20).optional().nullable(),
  activo: z.boolean().optional(),
  listasDet: z.lazy(() => ListasDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  listaPvpDet: z.lazy(() => ListaPvpDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  ventaDet: z.lazy(() => VentaDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  registroDet: z.lazy(() => RegistroDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductosUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProductosUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUncheckedCreateInput>;
export const ProductosUncheckedCreateInputObjectZodSchema = makeSchema();
