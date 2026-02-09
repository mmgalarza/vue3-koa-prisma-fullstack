import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutProveedoresInputObjectSchema as EmpresasCreateWithoutProveedoresInputObjectSchema } from './EmpresasCreateWithoutProveedoresInput.schema';
import { EmpresasUncheckedCreateWithoutProveedoresInputObjectSchema as EmpresasUncheckedCreateWithoutProveedoresInputObjectSchema } from './EmpresasUncheckedCreateWithoutProveedoresInput.schema';
import { EmpresasCreateOrConnectWithoutProveedoresInputObjectSchema as EmpresasCreateOrConnectWithoutProveedoresInputObjectSchema } from './EmpresasCreateOrConnectWithoutProveedoresInput.schema';
import { EmpresasUpsertWithoutProveedoresInputObjectSchema as EmpresasUpsertWithoutProveedoresInputObjectSchema } from './EmpresasUpsertWithoutProveedoresInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasUpdateToOneWithWhereWithoutProveedoresInputObjectSchema as EmpresasUpdateToOneWithWhereWithoutProveedoresInputObjectSchema } from './EmpresasUpdateToOneWithWhereWithoutProveedoresInput.schema';
import { EmpresasUpdateWithoutProveedoresInputObjectSchema as EmpresasUpdateWithoutProveedoresInputObjectSchema } from './EmpresasUpdateWithoutProveedoresInput.schema';
import { EmpresasUncheckedUpdateWithoutProveedoresInputObjectSchema as EmpresasUncheckedUpdateWithoutProveedoresInputObjectSchema } from './EmpresasUncheckedUpdateWithoutProveedoresInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutProveedoresInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutProveedoresInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutProveedoresInputObjectSchema).optional(),
  upsert: z.lazy(() => EmpresasUpsertWithoutProveedoresInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EmpresasUpdateToOneWithWhereWithoutProveedoresInputObjectSchema), z.lazy(() => EmpresasUpdateWithoutProveedoresInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutProveedoresInputObjectSchema)]).optional()
}).strict();
export const EmpresasUpdateOneRequiredWithoutProveedoresNestedInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutProveedoresNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutProveedoresNestedInput>;
export const EmpresasUpdateOneRequiredWithoutProveedoresNestedInputObjectZodSchema = makeSchema();
