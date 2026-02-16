import { z } from 'zod';

/**
 * @description Definición de estados para la lógica de visualización y filtrado en el Front.
 * Refleja la estructura de 3 columnas del componente de comandas.
 */
export const EstadoComandaEnum = z.enum([
  'PENDIENTE',    // Totalmente pendientes (Sin cocinero, sin servido)
  'SINCOCINA',  // Al menos un producto tomado o parcialmente servido
  'FINALIZADA',   // Todos los productos servidos (Listo para entrega)
  'ENTREGADA',    // Ya no se visualiza en el tablero
  'ANULADA'
]);

/**
 * @description Schema para un ítem/producto individual dentro de una comanda.
 * Incluye la lógica de "Coger/Liberar" mediante idCocinero.
 */
export const ComandaProductoSchema = z.object({
  id: z.number().int(),
  idProducto: z.number().int(),
  nombre: z.string().optional(), // Para visualización en UI
  pedido: z.number().int().min(1),
  servido: z.number().int().min(0),
  idCocinero: z.number().int().nullable(), // Null = Disponible, Int = Exclusivo
});

/**
 * @description Schema principal de la Comanda.
 */
export const ComandaSchema = z.object({
  idComanda: z.number().int(),
  idOperacion: z.number().int(),
  estado: EstadoComandaEnum,
  stats: z.object({
    totalLineas: z.number(),
    lineasFinalizadas: z.number(),
    lineasPendientes: z.number(),
    lineasSinCocinero: z.number(),
    porcentaje: z.number().int().min(0).max(100),
  }),  
  productos: z.array(ComandaProductoSchema),
  updatedAt: z.date().or(z.string().datetime()),
});

// --- SCHEMAS PARA ACCIONES DE UI (VITE/SVELTE) ---

/**
 * @description Al "Coger" un pedido, vinculamos al cocinero logueado.
 */
export const AccionCogerProductoSchema = z.object({
  idDetalleComanda: z.number().int(),
  idCocinero: z.number().int(),
});

/**
 * @description Al "Servir", se actualiza la cantidad numérica. 
 * Si servido == pedido, la lógica de negocio debería liberar automáticamente.
 */
export const AccionServirProductoSchema = z.object({
  idDetalleComanda: z.number().int(),
  servido: z.number().int(), // Delta o Total dependiendo de la implementación del Backend
});

// --- INFERENCIA DE TIPOS ---

export type EstadoComanda = z.infer<typeof EstadoComandaEnum>;
export type ComandaProducto = z.infer<typeof ComandaProductoSchema>;
export type Comanda = z.infer<typeof ComandaSchema>;
export type AccionCogerProducto = z.infer<typeof AccionCogerProductoSchema>;
export type AccionServirProducto = z.infer<typeof AccionServirProductoSchema>;

/**
 * @description Filtros para las 3 columnas de la vista de Comandas.
 */
export const ColumnasComanda = {
  PENDIENTES: (c: Comanda) => c.estado === 'PENDIENTE' || (c.estado === 'SINCOCINA' && !c.productos.some(p => p.idCocinero !== null)),
  MIS_COMANDAS: (c: Comanda, idCocinero: number) => c.productos.some(p => p.idCocinero === idCocinero),
  FINALIZADAS: (c: Comanda) => c.estado === 'FINALIZADA'
};

// 1. Definir los tipos de evento
export const TiposEventoComanda = z.enum([
  // --- Flujo Global de Comanda ---
  'NUEVA_COMANDA',        // Entrada desde ventas
  'COMANDA_ACTUALIZADA',  // Cambio genérico (fallback)
  'COMANDA_FINALIZADA',   // Todos los productos listos (pasa a columna verde)
  'COMANDA_ENTREGADA',    // Sale del monitor (entregada a cliente/mesero)
  'COMANDA_ELIMINADA',    // Anulada o borrada (limpia la UI)

  // --- Acciones de Interacción del Chef (Nuevas) ---
  'PRODUCTO_COGER',       // El chef reclama un ítem (botón SERVIR en rojo)
  'PRODUCTO_SOLTAR',      // El chef libera un ítem (botón SOLTAR)
  'PRODUCTO_SERVIDO',     // El chef incrementa la cantidad (barra de progreso)
  
  // --- Estados de Columna (Mantenidos) ---
  'COMANDA_SINCOCINA'     // Vuelve a estado crítico si se liberan todos los ítems
]);

// 2. Definir el output (o usar ComandaSchema si es idéntico)
export const ComandaOutput = ComandaSchema; 

// 3. Ahora ya puedes definir el Payload sin errores
export const EventoComandaPayload = z.object({
  tipo: TiposEventoComanda,
  data: ComandaOutput,
  timestamp: z.number().default(() => Date.now()),
});

export type EventoComandaPayloadType = z.infer<typeof EventoComandaPayload>;    