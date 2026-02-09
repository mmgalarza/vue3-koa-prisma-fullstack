import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasCreateWithoutCategoriasInputObjectSchema as EmpresasCreateWithoutCategoriasInputObjectSchema } from './EmpresasCreateWithoutCategoriasInput.schema';
import { EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema as EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema } from './EmpresasUncheckedCreateWithoutCategoriasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EmpresasCreateWithoutCategoriasInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema)])
}).strict();
export const EmpresasCreateOrConnectWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.EmpresasCreateOrConnectWithoutCategoriasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateOrConnectWithoutCategoriasInput>;
export const EmpresasCreateOrConnectWithoutCategoriasInputObjectZodSchema = makeSchema();
