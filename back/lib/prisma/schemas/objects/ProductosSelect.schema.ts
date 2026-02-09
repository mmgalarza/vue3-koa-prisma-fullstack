import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasArgsObjectSchema as CategoriasArgsObjectSchema } from './CategoriasArgs.schema';
import { ListasDetFindManySchema as ListasDetFindManySchema } from '../findManyListasDet.schema';
import { ListaPvpDetFindManySchema as ListaPvpDetFindManySchema } from '../findManyListaPvpDet.schema';
import { VentaDetFindManySchema as VentaDetFindManySchema } from '../findManyVentaDet.schema';
import { RegistroDetFindManySchema as RegistroDetFindManySchema } from '../findManyRegistroDet.schema';
import { ProductosCountOutputTypeArgsObjectSchema as ProductosCountOutputTypeArgsObjectSchema } from './ProductosCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idProducto: z.boolean().optional(),
  nombre: z.boolean().optional(),
  idCategoria: z.boolean().optional(),
  descripcion: z.boolean().optional(),
  imagen: z.boolean().optional(),
  codigo: z.boolean().optional(),
  unidad: z.boolean().optional(),
  activo: z.boolean().optional(),
  categoria: z.union([z.boolean(), z.lazy(() => CategoriasArgsObjectSchema)]).optional(),
  listasDet: z.union([z.boolean(), z.lazy(() => ListasDetFindManySchema)]).optional(),
  listaPvpDet: z.union([z.boolean(), z.lazy(() => ListaPvpDetFindManySchema)]).optional(),
  ventaDet: z.union([z.boolean(), z.lazy(() => VentaDetFindManySchema)]).optional(),
  registroDet: z.union([z.boolean(), z.lazy(() => RegistroDetFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductosCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductosSelectObjectSchema: z.ZodType<Prisma.ProductosSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductosSelect>;
export const ProductosSelectObjectZodSchema = makeSchema();
