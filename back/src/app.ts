import Koa from "koa";
import serve from "koa-static";
import path from "path";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import { fileURLToPath } from "url";
import * as swaggerUiDist from "swagger-ui-dist";

// Routes
import authRoutes from "@modulos/auth/routes";
import usuarioRoutes from "@modulos/usuarios/routes";
import empresaRoutes from "@modulos/empresa/routes";
import clientesRoutes from "@modulos/clientes/routes";
import productosRoutes from "@modulos/productos/routes";
import productoIMGRoutes from "@modulos/productoIMG/routes";
import categoriasRoutes from "@modulos/categorias/routes";
import docsSpecRoutes from "@modulos/spec/routes";
import operacionesRoutes from "@modulos/operaciones/routes";
import comandasRoutes from "@modulos/comandas/routes";
import perfilRoutes from "@modulos/perfil/routes";

const app = new Koa();

// -------- paths ESModules --------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ======================================================
// 🛡️ 1. GESTOR DE ERRORES GLOBAL (Debe ir el PRIMERO)
// ======================================================
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err: any) {
    // Si tienes el depurador de VS Code conectado (F5), 
    // y marcas "Uncaught Exceptions", se detendrá aquí.
    console.error("❌ ERROR DETECTADO:");
    console.error(`Mensaje: ${err.message}`);
    
    ctx.status = err.status || 500;
    ctx.body = {
      ok: false,
      message: err.message || "Internal Server Error",
      // El stack trace solo se envía en desarrollo para que veas la línea exacta del fallo
      stack: process.env.NODE_ENV !== "production" ? err.stack : undefined,
    };
  }
});

// -------- CORS --------
app.use(
  cors({
    origin: (ctx) => {
      const origin = ctx.get("Origin");
      if (!origin) return "*";

      // Permitir localhost, 127.0.0.1 y cualquier IP de red local (192.168.x.x o 10.x.x.x)
      const isLocal = /localhost|127\.0\.0\.1|^http:\/\/192\.168\.|^http:\/\/10\./.test(origin);
      
      if (isLocal) {
        return origin; // 🚩 Devuelve el origen exacto para que el navegador lo acepte
      }
      
      return ""; // Rechazar otros
    },
    credentials: true,
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);

// -------- body parser --------
app.use(bodyParser());

// ======================================================
// 🚀 2. RUTAS DE LA API
// ======================================================
app.use(authRoutes.routes()).use(authRoutes.allowedMethods());
app.use(usuarioRoutes.routes()).use(usuarioRoutes.allowedMethods());
app.use(empresaRoutes.routes()).use(empresaRoutes.allowedMethods());
app.use(clientesRoutes.routes()).use(clientesRoutes.allowedMethods());
app.use(productoIMGRoutes.routes()).use(productoIMGRoutes.allowedMethods());
app.use(productosRoutes.routes()).use(productosRoutes.allowedMethods());
app.use(categoriasRoutes.routes()).use(categoriasRoutes.allowedMethods());
app.use(docsSpecRoutes.routes()).use(docsSpecRoutes.allowedMethods());
app.use(operacionesRoutes.routes()).use(operacionesRoutes.allowedMethods());
app.use(comandasRoutes.routes()).use(comandasRoutes.allowedMethods());
app.use(perfilRoutes.routes()).use(perfilRoutes.allowedMethods());

// Depuración de rutas en consola al arrancar
console.log("\n📍 Rutas registradas:");
app.middleware.forEach((mw: any) => {
  if (mw.router && mw.router.stack) {
    mw.router.stack.forEach((route: any) => {
      console.log(`${route.methods.join(", ")}\t${route.path}`);
    });
  }
});
console.log("");

// ======================================================
// 📘 3. SWAGGER & STATIC FILES (Al final)
// ======================================================

// 1️⃣ Servir TU carpeta openapi
const openapiFolder = path.join(__dirname, "./openapi");
app.use(serve(openapiFolder));

// 2️⃣ Servir assets de Swagger UI
const swaggerDistPath = swaggerUiDist.getAbsoluteFSPath();
app.use(serve(swaggerDistPath));

// 3️⃣ Public folder
app.use(serve(path.join(__dirname, "../public")));

export default app;