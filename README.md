# Sistema de Gestión - Full Stack (Vue 3 + Koa + Prisma)

Proyecto full‑stack orientado a demostrar dominio de desarrollo web moderno. Incluye un **frontend SPA** en Vue 3 + Vite y un **backend API** en Koa + Prisma con PostgreSQL.

## Demo (opcional)
> Agregá aquí los links públicos si lo desplegás (Render/Railway/Vercel, etc.).

## Stack
**Frontend**
- Vue 3 + Vite
- Vuetify + Tailwind
- Pinia + Vue Router

**Backend**
- Node.js + TypeScript (ESM)
- Koa + Router + Bodyparser
- Prisma ORM + PostgreSQL
- Zod (validación)
- JWT + OAuth2 (emails)
- Swagger UI

## Características principales
- Autenticación y manejo de sesiones (JWT)
- Registro/activación de cuenta y reset de contraseña por email
- CRUD de usuarios, clientes, categorías, productos y operaciones
- Documentación de API con Swagger
- Arquitectura modular (módulos por dominio)

## Estructura del repositorio
```
/ (raíz)
├─ back/    -> API (Koa + Prisma)
├─ front/   -> SPA (Vue 3 + Vite)
├─ common/  -> contratos y tipos compartidos
└─ commands/, prompts/, respaldos/
```

## Requisitos
- Node.js 18+
- PostgreSQL

## Configuración rápida
### 1) Backend
```powershell
cd d:\vue\back
npm install
```

Crear `.env` en `back/`:
```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB?schema=public"
PORT=3000
NODE_ENV=development

JWT_SECRET=tu_secreto
ACTIVATION_JWT_SECRET=tu_secreto_activacion

FRONTEND_URL=http://localhost:5173
SPA_URL=http://localhost:5173

MAIL_ENABLED=false
MAIL_USER=tu_correo@gmail.com
MAIL_FROM="Proyecto <tu_correo@gmail.com>"
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GOOGLE_REFRESH_TOKEN=...
```

Opcional (migraciones y cliente):
```powershell
npx prisma generate
npx prisma migrate dev
```

Levantar API:
```powershell
npm run dev
```

Swagger UI: `http://localhost:3000`

### 2) Frontend
```powershell
cd d:\vue\front
npm install
npm run dev
```

Aplicación: `http://localhost:5173`

## Documentación adicional
- Backend: `back/README.md`
- Frontend: `front/README.md`
- API Docs: `back/api-docs/`
- CV/LinkedIn: `docs/demo.md`

## Screenshots
> Reemplazá con capturas reales para tu CV.
- `docs/ui-home.png`
- `docs/ui-dashboard.png`
- `docs/ui-productos.png`
- `docs/ui-carrito.png`
- `docs/swagger.png`
- `docs/erd.png`

## Assets para CV
- Guía y placeholders: `docs/README.md`

## Despliegue (ideas)
- **Backend**: Render / Railway / Fly.io
- **Frontend**: Vercel / Netlify

## Autor
- Nombre: Martin Miguel Galarza Continanza
- Contacto: mmgalarza@gmail.com

## Licencia
MIT (o la que definas)
