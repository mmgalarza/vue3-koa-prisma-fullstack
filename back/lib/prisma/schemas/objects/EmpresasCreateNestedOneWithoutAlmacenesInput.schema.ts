import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutAlmacenesInputObjectSchema as EmpresasCreateWithoutAlmacenesInputObjectSchema } from './EmpresasCreateWithoutAlmacenesInput.schema';
import { EmpresasUncheckedCreateWithoutAlmacenesInputObjectSchema as EmpresasUncheckedCreateWithoutAlmacenesInputObjectSchema } from './EmpresasUncheckedCreateWithoutAlmacenesInput.schema';
import { EmpresasCreateOrConnectWithoutAlmacenesInputObjectSchema as EmpresasCreateOrConnectWithoutAlmacenesInputObjectSchema } from './EmpresasCreateOrConnectWithoutAlmacenesInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutAlmacenesInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutAlmacenesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutAlmacenesInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional()
}).strict();
export const EmpresasCreateNestedOneWithoutAlmacenesInputObjectSchema: z.ZodType<Prisma.EmpresasCreateNestedOneWithoutAlmacenesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateNestedOneWithoutAlmacenesInput>;
export const EmpresasCreateNestedOneWithoutAlmacenesInputObjectZodSchema = makeSchema();
