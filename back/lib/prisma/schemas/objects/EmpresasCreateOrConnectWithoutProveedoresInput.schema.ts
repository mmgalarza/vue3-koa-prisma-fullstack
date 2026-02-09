import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasCreateWithoutProveedoresInputObjectSchema as EmpresasCreateWithoutProveedoresInputObjectSchema } from './EmpresasCreateWithoutProveedoresInput.schema';
import { EmpresasUncheckedCreateWithoutProveedoresInputObjectSchema as EmpresasUncheckedCreateWithoutProveedoresInputObjectSchema } from './EmpresasUncheckedCreateWithoutProveedoresInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EmpresasCreateWithoutProveedoresInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutProveedoresInputObjectSchema)])
}).strict();
export const EmpresasCreateOrConnectWithoutProveedoresInputObjectSchema: z.ZodType<Prisma.EmpresasCreateOrConnectWithoutProveedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateOrConnectWithoutProveedoresInput>;
export const EmpresasCreateOrConnectWithoutProveedoresInputObjectZodSchema = makeSchema();
