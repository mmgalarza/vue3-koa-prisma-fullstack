import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroUpdateWithoutActividadInputObjectSchema as RegistroUpdateWithoutActividadInputObjectSchema } from './RegistroUpdateWithoutActividadInput.schema';
import { RegistroUncheckedUpdateWithoutActividadInputObjectSchema as RegistroUncheckedUpdateWithoutActividadInputObjectSchema } from './RegistroUncheckedUpdateWithoutActividadInput.schema';
import { RegistroCreateWithoutActividadInputObjectSchema as RegistroCreateWithoutActividadInputObjectSchema } from './RegistroCreateWithoutActividadInput.schema';
import { RegistroUncheckedCreateWithoutActividadInputObjectSchema as RegistroUncheckedCreateWithoutActividadInputObjectSchema } from './RegistroUncheckedCreateWithoutActividadInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RegistroUpdateWithoutActividadInputObjectSchema), z.lazy(() => RegistroUncheckedUpdateWithoutActividadInputObjectSchema)]),
  create: z.union([z.lazy(() => RegistroCreateWithoutActividadInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutActividadInputObjectSchema)])
}).strict();
export const RegistroUpsertWithWhereUniqueWithoutActividadInputObjectSchema: z.ZodType<Prisma.RegistroUpsertWithWhereUniqueWithoutActividadInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpsertWithWhereUniqueWithoutActividadInput>;
export const RegistroUpsertWithWhereUniqueWithoutActividadInputObjectZodSchema = makeSchema();
