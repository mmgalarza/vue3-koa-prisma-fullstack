import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { ProductosFindManySchema as ProductosFindManySchema } from '../findManyProductos.schema';
import { CategoriasCountOutputTypeArgsObjectSchema as CategoriasCountOutputTypeArgsObjectSchema } from './CategoriasCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idCategoria: z.boolean().optional(),
  nombre: z.boolean().optional(),
  descripcion: z.boolean().optional(),
  icono: z.boolean().optional(),
  activo: z.boolean().optional(),
  idEmpresa: z.boolean().optional(),
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  productos: z.union([z.boolean(), z.lazy(() => ProductosFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CategoriasCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CategoriasSelectObjectSchema: z.ZodType<Prisma.CategoriasSelect> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasSelect>;
export const CategoriasSelectObjectZodSchema = makeSchema();
