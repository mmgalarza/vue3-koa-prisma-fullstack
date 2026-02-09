import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { EmpresasUpdateWithoutAlmacenesInputObjectSchema as EmpresasUpdateWithoutAlmacenesInputObjectSchema } from './EmpresasUpdateWithoutAlmacenesInput.schema';
import { EmpresasUncheckedUpdateWithoutAlmacenesInputObjectSchema as EmpresasUncheckedUpdateWithoutAlmacenesInputObjectSchema } from './EmpresasUncheckedUpdateWithoutAlmacenesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EmpresasUpdateWithoutAlmacenesInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutAlmacenesInputObjectSchema)])
}).strict();
export const EmpresasUpdateToOneWithWhereWithoutAlmacenesInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutAlmacenesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutAlmacenesInput>;
export const EmpresasUpdateToOneWithWhereWithoutAlmacenesInputObjectZodSchema = makeSchema();
