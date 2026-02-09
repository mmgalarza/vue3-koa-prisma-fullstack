import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutCategoriasInputObjectSchema as EmpresasCreateWithoutCategoriasInputObjectSchema } from './EmpresasCreateWithoutCategoriasInput.schema';
import { EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema as EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema } from './EmpresasUncheckedCreateWithoutCategoriasInput.schema';
import { EmpresasCreateOrConnectWithoutCategoriasInputObjectSchema as EmpresasCreateOrConnectWithoutCategoriasInputObjectSchema } from './EmpresasCreateOrConnectWithoutCategoriasInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutCategoriasInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutCategoriasInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional()
}).strict();
export const EmpresasCreateNestedOneWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.EmpresasCreateNestedOneWithoutCategoriasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateNestedOneWithoutCategoriasInput>;
export const EmpresasCreateNestedOneWithoutCategoriasInputObjectZodSchema = makeSchema();
