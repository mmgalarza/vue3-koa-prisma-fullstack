import * as z from 'zod';

export const FlujoSchema = z.enum(['NO', 'ENTRANTE', 'SALIENTE', 'MIXTO'])

export type Flujo = z.infer<typeof FlujoSchema>;