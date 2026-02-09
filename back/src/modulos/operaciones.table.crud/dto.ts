import { z } from 'zod';

/* =========================
   CREAR OPERACIÓN (BORRADOR)
========================= */
export const OperacionCreateSchema = z.object({
  idCliente: z.number().optional(), // Opcional si es operación anónima
});

export type OperacionCreateDTO = z.infer<typeof OperacionCreateSchema>;

/* =========================
   DETALLE DE OPERACIÓN
========================= */

/** Crear un detalle (agregar producto a la operación) */
export const OperacionDetalleCreateSchema = z.object({
  idOperacion: z.number(),
  idProducto: z.number(),
  cantidad: z.number().positive(), // cantidad > 0
});

export type OperacionDetalleCreateDTO =
  z.infer<typeof OperacionDetalleCreateSchema>;

/** Actualizar detalle (solo cantidad por ahora) */
export const OperacionDetalleUpdateSchema = z.object({
  cantidad: z.number().positive().optional(),
});

export type OperacionDetalleUpdateDTO =
  z.infer<typeof OperacionDetalleUpdateSchema>;

/* =========================
   CONFIRMAR OPERACIÓN
========================= */

/** Confirmar operación (cambia estado a CONFIRMADA) */
export const OperacionConfirmarSchema = z.object({
  confirmar: z.literal(true), // solo true
});

export type OperacionConfirmarDTO =
  z.infer<typeof OperacionConfirmarSchema>;
