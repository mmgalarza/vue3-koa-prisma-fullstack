import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutProveedoresInputObjectSchema as EmpresasCreateWithoutProveedoresInputObjectSchema } from './EmpresasCreateWithoutProveedoresInput.schema';
import { EmpresasUncheckedCreateWithoutProveedoresInputObjectSchema as EmpresasUncheckedCreateWithoutProveedoresInputObjectSchema } from './EmpresasUncheckedCreateWithoutProveedoresInput.schema';
import { EmpresasCreateOrConnectWithoutProveedoresInputObjectSchema as EmpresasCreateOrConnectWithoutProveedoresInputObjectSchema } from './EmpresasCreateOrConnectWithoutProveedoresInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutProveedoresInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutProveedoresInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutProveedoresInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional()
}).strict();
export const EmpresasCreateNestedOneWithoutProveedoresInputObjectSchema: z.ZodType<Prisma.EmpresasCreateNestedOneWithoutProveedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateNestedOneWithoutProveedoresInput>;
export const EmpresasCreateNestedOneWithoutProveedoresInputObjectZodSchema = makeSchema();
