import { z } from 'zod';

// --- Esquemas de Dominio ---

export const ComandaEstadoEnum = z.enum(['PENDIENTE', 'PREPARACION', 'LISTA']);

export const ComandaItemSchema = z.object({
  id: z.string().uuid(),
  descripcion: z.string().min(1, "La descripción es requerida"),
  cantidad: z.number().int().positive(),
  estaListo: z.boolean().default(false)
});

export const ComandaSchema = z.object({
  id: z.string().uuid(),
  idOperacion: z.number().int(),
  idCocinero: z.string().uuid().nullable(),
  estado: ComandaEstadoEnum,
  items: z.array(ComandaItemSchema)
});

// --- DTOs (Data Transfer Objects) ---

export const TomarComandaSchema = z.object({
  idCocinero: z.string().uuid({ message: "ID de cocinero inválido" })
});

export const CheckItemSchema = z.object({
  estaListo: z.boolean()
});

// --- Esquemas de Eventos WebSocket (Supervisor) ---

export const CocinaEventSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal('NUEVA_COMANDA'),
    payload: ComandaSchema
  }),
  z.object({
    type: z.literal('COMANDA_TOMADA'),
    payload: z.object({
      idComanda: z.string().uuid(),
      idCocinero: z.string().uuid()
    })
  }),
  z.object({
    type: z.literal('ITEM_ACTUALIZADO'),
    payload: z.object({
      idItem: z.string().uuid(),
      estaListo: z.boolean()
    })
  }),
  z.object({
    type: z.literal('COMANDA_LISTA'),
    payload: z.object({
      idComanda: z.string().uuid()
    })
  })
]);

// --- Tipos Inferidos ---

export type Comanda = z.infer<typeof ComandaSchema>;
export type ComandaItem = z.infer<typeof ComandaItemSchema>;
export type TomarComandaDTO = z.infer<typeof TomarComandaSchema>;
export type CheckItemDTO = z.infer<typeof CheckItemSchema>;
export type CocinaEvent = z.infer<typeof CocinaEventSchema>;