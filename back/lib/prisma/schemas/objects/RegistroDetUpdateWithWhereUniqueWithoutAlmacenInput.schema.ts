import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema';
import { RegistroDetUpdateWithoutAlmacenInputObjectSchema as RegistroDetUpdateWithoutAlmacenInputObjectSchema } from './RegistroDetUpdateWithoutAlmacenInput.schema';
import { RegistroDetUncheckedUpdateWithoutAlmacenInputObjectSchema as RegistroDetUncheckedUpdateWithoutAlmacenInputObjectSchema } from './RegistroDetUncheckedUpdateWithoutAlmacenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RegistroDetUpdateWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetUncheckedUpdateWithoutAlmacenInputObjectSchema)])
}).strict();
export const RegistroDetUpdateWithWhereUniqueWithoutAlmacenInputObjectSchema: z.ZodType<Prisma.RegistroDetUpdateWithWhereUniqueWithoutAlmacenInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpdateWithWhereUniqueWithoutAlmacenInput>;
export const RegistroDetUpdateWithWhereUniqueWithoutAlmacenInputObjectZodSchema = makeSchema();
