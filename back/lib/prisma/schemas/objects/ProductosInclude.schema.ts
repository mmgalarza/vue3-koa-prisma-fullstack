import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasArgsObjectSchema as CategoriasArgsObjectSchema } from './CategoriasArgs.schema';
import { ListasDetFindManySchema as ListasDetFindManySchema } from '../findManyListasDet.schema';
import { ListaPvpDetFindManySchema as ListaPvpDetFindManySchema } from '../findManyListaPvpDet.schema';
import { VentaDetFindManySchema as VentaDetFindManySchema } from '../findManyVentaDet.schema';
import { RegistroDetFindManySchema as RegistroDetFindManySchema } from '../findManyRegistroDet.schema';
import { ProductosCountOutputTypeArgsObjectSchema as ProductosCountOutputTypeArgsObjectSchema } from './ProductosCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  categoria: z.union([z.boolean(), z.lazy(() => CategoriasArgsObjectSchema)]).optional(),
  listasDet: z.union([z.boolean(), z.lazy(() => ListasDetFindManySchema)]).optional(),
  listaPvpDet: z.union([z.boolean(), z.lazy(() => ListaPvpDetFindManySchema)]).optional(),
  ventaDet: z.union([z.boolean(), z.lazy(() => VentaDetFindManySchema)]).optional(),
  registroDet: z.union([z.boolean(), z.lazy(() => RegistroDetFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductosCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductosIncludeObjectSchema: z.ZodType<Prisma.ProductosInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductosInclude>;
export const ProductosIncludeObjectZodSchema = makeSchema();
