import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema';
import { RegistroDetUpdateWithoutRegistroInputObjectSchema as RegistroDetUpdateWithoutRegistroInputObjectSchema } from './RegistroDetUpdateWithoutRegistroInput.schema';
import { RegistroDetUncheckedUpdateWithoutRegistroInputObjectSchema as RegistroDetUncheckedUpdateWithoutRegistroInputObjectSchema } from './RegistroDetUncheckedUpdateWithoutRegistroInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RegistroDetUpdateWithoutRegistroInputObjectSchema), z.lazy(() => RegistroDetUncheckedUpdateWithoutRegistroInputObjectSchema)])
}).strict();
export const RegistroDetUpdateWithWhereUniqueWithoutRegistroInputObjectSchema: z.ZodType<Prisma.RegistroDetUpdateWithWhereUniqueWithoutRegistroInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpdateWithWhereUniqueWithoutRegistroInput>;
export const RegistroDetUpdateWithWhereUniqueWithoutRegistroInputObjectZodSchema = makeSchema();
