import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema as ProductosUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema } from './ProductosUncheckedCreateNestedManyWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  idCategoria: z.number().int().optional(),
  nombre: z.string(),
  descripcion: z.string().optional().nullable(),
  icono: z.string().optional().nullable(),
  activo: z.boolean().optional(),
  productos: z.lazy(() => ProductosUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema).optional()
}).strict();
export const CategoriasUncheckedCreateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.CategoriasUncheckedCreateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasUncheckedCreateWithoutEmpresaInput>;
export const CategoriasUncheckedCreateWithoutEmpresaInputObjectZodSchema = makeSchema();
