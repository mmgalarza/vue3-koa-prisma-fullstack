import * as z from 'zod';
// prettier-ignore
export const VentaModelSchema = z.object({
    idVenta: z.number().int(),
    fecha: z.date(),
    estado: z.string(),
    idEmpresa: z.number().int(),
    idCliente: z.number().int(),
    idListaPvp: z.number().int(),
    empresa: z.unknown(),
    cliente: z.unknown(),
    listaPvp: z.unknown(),
    detalles: z.array(z.unknown()),
    factura: z.unknown().nullable(),
    registros: z.array(z.unknown())
}).strict();

export type VentaPureType = z.infer<typeof VentaModelSchema>;
