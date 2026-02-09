import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema as ProductosUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema } from './ProductosUncheckedCreateNestedManyWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  idCategoria: z.number().int().optional(),
  nombre: z.string().max(80),
  descripcion: z.string().max(150).optional().nullable(),
  icono: z.string().max(50).optional().nullable(),
  activo: z.boolean().optional(),
  idEmpresa: z.number().int().optional(),
  productos: z.lazy(() => ProductosUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema).optional()
}).strict();
export const CategoriasUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CategoriasUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasUncheckedCreateInput>;
export const CategoriasUncheckedCreateInputObjectZodSchema = makeSchema();
