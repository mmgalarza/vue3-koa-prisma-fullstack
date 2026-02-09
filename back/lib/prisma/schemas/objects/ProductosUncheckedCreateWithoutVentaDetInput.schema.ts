import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema as ListasDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './ListasDetUncheckedCreateNestedManyWithoutProductoInput.schema';
import { ListaPvpDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema as ListaPvpDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './ListaPvpDetUncheckedCreateNestedManyWithoutProductoInput.schema';
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
  listasDet: z.lazy(() => ListasDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  listaPvpDet: z.lazy(() => ListaPvpDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  registroDet: z.lazy(() => RegistroDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductosUncheckedCreateWithoutVentaDetInputObjectSchema: z.ZodType<Prisma.ProductosUncheckedCreateWithoutVentaDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUncheckedCreateWithoutVentaDetInput>;
export const ProductosUncheckedCreateWithoutVentaDetInputObjectZodSchema = makeSchema();
