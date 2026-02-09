import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasCreateWithoutAlmacenesInputObjectSchema as EmpresasCreateWithoutAlmacenesInputObjectSchema } from './EmpresasCreateWithoutAlmacenesInput.schema';
import { EmpresasUncheckedCreateWithoutAlmacenesInputObjectSchema as EmpresasUncheckedCreateWithoutAlmacenesInputObjectSchema } from './EmpresasUncheckedCreateWithoutAlmacenesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EmpresasCreateWithoutAlmacenesInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutAlmacenesInputObjectSchema)])
}).strict();
export const EmpresasCreateOrConnectWithoutAlmacenesInputObjectSchema: z.ZodType<Prisma.EmpresasCreateOrConnectWithoutAlmacenesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateOrConnectWithoutAlmacenesInput>;
export const EmpresasCreateOrConnectWithoutAlmacenesInputObjectZodSchema = makeSchema();
