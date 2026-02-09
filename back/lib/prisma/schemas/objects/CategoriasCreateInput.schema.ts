import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateNestedOneWithoutCategoriasInputObjectSchema as EmpresasCreateNestedOneWithoutCategoriasInputObjectSchema } from './EmpresasCreateNestedOneWithoutCategoriasInput.schema';
import { ProductosCreateNestedManyWithoutCategoriaInputObjectSchema as ProductosCreateNestedManyWithoutCategoriaInputObjectSchema } from './ProductosCreateNestedManyWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  nombre: z.string().max(80),
  descripcion: z.string().max(150).optional().nullable(),
  icono: z.string().max(50).optional().nullable(),
  activo: z.boolean().optional(),
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutCategoriasInputObjectSchema),
  productos: z.lazy(() => ProductosCreateNestedManyWithoutCategoriaInputObjectSchema).optional()
}).strict();
export const CategoriasCreateInputObjectSchema: z.ZodType<Prisma.CategoriasCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasCreateInput>;
export const CategoriasCreateInputObjectZodSchema = makeSchema();
