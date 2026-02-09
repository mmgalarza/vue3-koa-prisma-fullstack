import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCreateNestedManyWithoutCategoriaInputObjectSchema as ProductosCreateNestedManyWithoutCategoriaInputObjectSchema } from './ProductosCreateNestedManyWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  nombre: z.string().max(80),
  descripcion: z.string().max(150).optional().nullable(),
  icono: z.string().max(50).optional().nullable(),
  activo: z.boolean().optional(),
  productos: z.lazy(() => ProductosCreateNestedManyWithoutCategoriaInputObjectSchema).optional()
}).strict();
export const CategoriasCreateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.CategoriasCreateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasCreateWithoutEmpresaInput>;
export const CategoriasCreateWithoutEmpresaInputObjectZodSchema = makeSchema();
