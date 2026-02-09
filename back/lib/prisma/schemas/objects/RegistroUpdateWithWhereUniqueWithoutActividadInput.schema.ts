import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroUpdateWithoutActividadInputObjectSchema as RegistroUpdateWithoutActividadInputObjectSchema } from './RegistroUpdateWithoutActividadInput.schema';
import { RegistroUncheckedUpdateWithoutActividadInputObjectSchema as RegistroUncheckedUpdateWithoutActividadInputObjectSchema } from './RegistroUncheckedUpdateWithoutActividadInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RegistroUpdateWithoutActividadInputObjectSchema), z.lazy(() => RegistroUncheckedUpdateWithoutActividadInputObjectSchema)])
}).strict();
export const RegistroUpdateWithWhereUniqueWithoutActividadInputObjectSchema: z.ZodType<Prisma.RegistroUpdateWithWhereUniqueWithoutActividadInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateWithWhereUniqueWithoutActividadInput>;
export const RegistroUpdateWithWhereUniqueWithoutActividadInputObjectZodSchema = makeSchema();
