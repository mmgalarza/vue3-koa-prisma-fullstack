import * as z from 'zod';

export const TiposPvpSchema = z.enum(['MANUAL', 'COSTO_MARGEN', 'POR_CATEGORIA', 'PROMOCION'])

export type TiposPvp = z.infer<typeof TiposPvpSchema>;