import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasCreateNestedOneWithoutProductosInputObjectSchema as CategoriasCreateNestedOneWithoutProductosInputObjectSchema } from './CategoriasCreateNestedOneWithoutProductosInput.schema';
import { ListasDetCreateNestedManyWithoutProductoInputObjectSchema as ListasDetCreateNestedManyWithoutProductoInputObjectSchema } from './ListasDetCreateNestedManyWithoutProductoInput.schema';
import { ListaPvpDetCreateNestedManyWithoutProductoInputObjectSchema as ListaPvpDetCreateNestedManyWithoutProductoInputObjectSchema } from './ListaPvpDetCreateNestedManyWithoutProductoInput.schema';
import { VentaDetCreateNestedManyWithoutProductoInputObjectSchema as VentaDetCreateNestedManyWithoutProductoInputObjectSchema } from './VentaDetCreateNestedManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  nombre: z.string().max(120),
  descripcion: z.string().max(200).optional().nullable(),
  imagen: z.string().max(100).optional().nullable(),
  codigo: z.string().max(40).optional().nullable(),
  unidad: z.string().max(20).optional().nullable(),
  activo: z.boolean().optional(),
  categoria: z.lazy(() => CategoriasCreateNestedOneWithoutProductosInputObjectSchema).optional(),
  listasDet: z.lazy(() => ListasDetCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  listaPvpDet: z.lazy(() => ListaPvpDetCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  ventaDet: z.lazy(() => VentaDetCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductosCreateWithoutRegistroDetInputObjectSchema: z.ZodType<Prisma.ProductosCreateWithoutRegistroDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateWithoutRegistroDetInput>;
export const ProductosCreateWithoutRegistroDetInputObjectZodSchema = makeSchema();
