import http from 'http';
import { Server } from 'socket.io';
import app from './app';
// IMPORTANTE: Ajusta esta ruta a donde tengas tu archivo del supervisor
import * as Super from './modulos/comandas/super'; 

const PORT = parseInt(process.env.PORT || '3000', 10);

// 1. Crear el servidor HTTP nativo envolviendo la app de Koa
const httpServer = http.createServer(app.callback());

// 2. Configurar Socket.io con CORS para Svelte (puertos 5173/5174)
/*
export const io = new Server(httpServer, {
  cors: {
    origin: [/localhost:517[3-4]$/], 
    credentials: true
  }
});
*/
// 2. Configurar Socket.io con CORS permisivo para red local
export const io = new Server(httpServer, {
  cors: {
    // 'true' refleja el origen de quien llama. Es lo mejor para desarrollo en red local.
    origin: true, 
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "Accept"]
  }
});
// 3. 🚩 VITAL: Inicializar el Supervisor dándole el "megáfono" (io)
// Esto evita el error "Supervisor sin megáfono"
Super.initSupervisor(io);

// 4. Logs de conexión para depuración en terminal
io.on("connection", (socket) => {
  console.log("🟢 Cocinero conectado via Socket:", socket.id);
  
  socket.on("disconnect", () => {
    console.log("🔴 Cocinero desconectado");
  });
});

// 5. Arrancar el servidor
// Usamos httpServer.listen en lugar de app.listen para que Koa y Socket compartan puerto
httpServer.listen(PORT, '0.0.0.0', () => {
  console.log(`
  🚀 SERVIDOR INTEGRADO INICIADO
  -------------------------------------------
  📡 API & Web: http://localhost:${PORT}
  📘 Swagger UI: http://localhost:${PORT}/docs (o tu ruta)
  🔌 WebSocket:  Activo y vinculado al Supervisor
  -------------------------------------------
  `);
});