# API Docs (Koa + TypeScript)

Esta carpeta documenta **únicamente** los endpoints montados en `src/app.ts` y los endpoints privados definidos en `src/routes/dashboard.routes.ts`.

## Base URL
- `http://localhost:{PORT}`
- `PORT` por defecto: `3000` (ver `src/server.ts`).

## Autenticación
- Tipo: JWT en header.
- Header: `Authorization: Bearer <token>`
- Middleware: `src/middlewares/auth.middleware.ts`
  - `401 {"message":"No token provided"}` si falta header
  - `401 {"message":"Invalid token"}` si el token no valida
- Payload esperado en `ctx.state.user`: al menos `{ id, rol }`.
- Expiración: 1 hora por defecto (ver `src/utils/jwt.util.ts`).

### Autorización (Admin)
- Middleware: `src/middlewares/admin.guard.ts`
- Requiere `ctx.state.user.rol === "ADMIN"`.
- Respuestas:
  - `401 {"error":"UNAUTHORIZED"}` si no hay usuario en estado
  - `403 {"error":"FORBIDDEN"}` si no es admin

## Formato de errores
No hay un formato único global. Según el endpoint, puede responder:
- `{ "message": "..." }`
- `{ "error": "..." }`

## Versionado
No hay versionado explícito en la ruta (no existe `/v1`). **TODO**: definir estrategia de versionado (path o header).

## Notas sobre tipos
- Prisma `Decimal`: en JSON puede serializarse como string o number según la configuración. **TODO**: confirmar el formato que llega al cliente.

## Recursos documentados
- `auth.md`
- `usuarios.md`
- `empresa.md`
- `clientes.md`
- `categorias.md`
- `productos.md`
- `producto-componentes.md`
- `ordenes-fabricacion.md`
- `precios.md`
- `ventas.md`

## Endpoints NO documentados (por diseño)
- Rutas definidas pero no montadas en `src/app.ts` (por ejemplo `src/routes/productoImagenes.routes.ts` y `src/routes/productoComponente.routes.ts` públicos).
- Archivos de `d:/vue/back/doc/*` (se ignoran por estar desactualizados).
