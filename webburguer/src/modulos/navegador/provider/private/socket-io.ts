/**
 * Implementación Abstracta de Socket.io
 * Permite que el Aggregate se suscriba a eventos sin errores de compilación.
 */

// Definimos un tipo básico para los callbacks de eventos
type SocketCallback = (data: any) => void;

export const socket = {
  /**
   * Método 'on' (Escuchador)
   * Por ahora no hace nada, pero acepta los argumentos que el Aggregate enviará.
   */
  on(event: string, callback: SocketCallback): void {
    console.warn(`[Socket.io Mock] Suscrito a: ${event}. (Implementación pendiente)`);
    // En el futuro: this.realSocket.on(event, callback)
  },

  /**
   * Método 'off' (Desconexión)
   * Útil para cuando destruyas el componente o el aggregate.
   */
  off(event: string, callback?: SocketCallback): void {
    console.log(`[Socket.io Mock] Desuscrito de: ${event}`);
  },

  /**
   * Método 'emit' (Envío)
   * Por si el cliente necesita enviar mensajes al servidor.
   */
  emit(event: string, data: any): void {
    console.log(`[Socket.io Mock] Emitiendo ${event}:`, data);
  }
};