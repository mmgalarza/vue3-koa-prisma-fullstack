// src/modules/ventas/venta.schema.ts
import { z } from "zod";

export const crearVentaSchema = z.object({
  idProducto: z.number().int().positive(),  // solo productos finales
  cantidad: z.number().positive(),
  idAlmacen: z.number().int().positive(),
  idListaPvp: z.number().int().positive(),  // lista de precios a usar
});

export type CrearVentaDTO = z.infer<typeof crearVentaSchema>;
