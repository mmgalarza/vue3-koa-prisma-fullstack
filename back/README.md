# Backend - API de Gestión (Koa + Prisma)

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Koa](https://img.shields.io/badge/Koa-3.x-33333D?logo=koa&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-7.x-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16%2B-4169E1?logo=postgresql&logoColor=white)

Trabajo práctico que demuestra el control de las tecnologías del stack backend: Koa, TypeScript, Prisma y PostgreSQL. Incluye autenticación, manejo de usuarios, clientes, productos, operaciones y documentación con Swagger.

## Stack
- Node.js + TypeScript (ESM)
- Koa + Router + Bodyparser
- Prisma ORM + PostgreSQL
- Zod (validación)
- JWT (auth) + OAuth2 para email (Nodemailer + Gmail)
- Swagger UI (documentación)

## Características
- Registro/login con JWT
- Activación de cuenta por email y reset de contraseña
- CRUD de usuarios, empresa, clientes, categorías, productos, imágenes y operaciones
- Documentación Swagger servida desde la app

## Requisitos
- Node.js 18+ (recomendado)
- PostgreSQL

## Configuración (.env)
Crear un archivo `.env` en `back/` con las variables necesarias:

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

> Si no necesitás enviar emails en local, mantené `MAIL_ENABLED=false`.

## Instalación

```powershell
cd d:\vue\back
npm install
```

### Base de datos (Prisma)
Si querés aplicar las migraciones y generar el cliente:

```powershell
npx prisma generate
npx prisma migrate dev
```

## Ejecución

```powershell
npm run dev
```

El servidor expone Swagger UI en `http://localhost:3000`.

## Scripts útiles
- `npm run dev`: servidor en modo desarrollo
- `npm run debug`: servidor con inspector
- `npm run seed`: carga datos iniciales

## Estructura del proyecto
- `src/modulos/`: módulos de dominio (auth, usuarios, productos, etc.)
- `src/utils/`: utilidades (JWT, mail)
- `src/openapi/`: archivos estáticos de documentación
- `prisma/`: schema y migraciones
- `public/`: recursos estáticos (imágenes)
- `api-docs/`: documentación adicional en Markdown/YAML

## Arquitectura

```mermaid
flowchart LR
	client["Cliente (SPA)"] --> koa["Koa API (TS)"]
	koa --> auth["Auth/JWT"]
	koa --> modules["Módulos de dominio"]
	modules --> prisma["Prisma ORM"]
	prisma --> db[("PostgreSQL")]
	koa --> swagger["Swagger UI"]
	swagger --> openapi["OpenAPI estático"]
	koa --> public["Archivos públicos"]
	auth --> mail["Email (OAuth2)"]
```

### Flujo de autenticación
1. Registro: `POST /auth/register` → genera token de activación.
2. Activación: `GET /auth/activate?token=...`.
3. Login: `POST /auth/login` → JWT para sesión.
4. Reset password: `POST /auth/request-reset-password` → email con token.
5. Confirmación: `POST /auth/reset-password`.

## Endpoints principales
- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/activate?token=...`
- `POST /auth/resend-activation`
- `POST /auth/request-reset-password`
- `POST /auth/reset-password`

> Para ver el listado completo, usar Swagger UI en la URL del servidor.

## Screenshots
Agregá imágenes reales del proyecto para mostrar en el CV:

![Swagger UI](docs/swagger.png)
![ERD](docs/erd.png)

## Despliegue
Opciones recomendadas para un backend con PostgreSQL:

### Diagrama de despliegue

```mermaid
flowchart LR
	user["Usuario"] --> web["Render/Railway Web Service"]
	web --> api["Koa API"]
	api --> db[("PostgreSQL")]
	api --> storage["Storage público (imágenes)"]
	api --> mail["Gmail OAuth2"]
```

### Render
1. Crear un servicio web apuntando al repo.
2. Build command: `npm install`
3. Start command: `npm run dev` (o `node dist` si compilás)
4. Configurar variables de entorno (`DATABASE_URL`, `JWT_SECRET`, etc.).

### Railway
1. Crear proyecto y conectar el repo.
2. Agregar plugin de PostgreSQL.
3. Configurar variables de entorno.
4. Ejecutar migraciones con `npx prisma migrate dev` en el entorno.

## Sobre el proyecto
Este backend es un trabajo práctico orientado a demostrar dominio de tecnologías backend modernas, arquitectura modular y buenas prácticas para APIs REST.

## Autor
- Nombre: Martin Miguel Galarza Continanza
- Contacto: mmgalarza@gmail.com

## Licencia
MIT (o la que definas para tu repositorio)
