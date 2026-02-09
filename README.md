# Sistema de Gestión Full-Stack - NodeTS & Vue 3

Proyecto profesional orientado a demostrar dominio técnico en desarrollo web moderno. Se trata de una solución integral con **arquitectura desacoplada**, seguridad de tipos de extremo a extremo y un diseño modular por dominios.

## 🚀 Stack Tecnológico & Arquitectura

El proyecto se basa en un ecosistema **Fullstack Moderno (NodeTS)**, diseñado con un enfoque de arquitectura desacoplada y seguridad de tipos de extremo a extremo (*End-to-End Type Safety*).

### 🛠️ Tecnologías Principales

| Capa | Tecnología | Rol / Descripción |
| :--- | :--- | :--- |
| **Frontend** | Vue 3 + Vite | SPA de alto rendimiento con Composition API. |
| **Marcado** | Pug | Sintaxis limpia y minimalista para templates Vue. |
| **UI Kit** | Vuetify 3.5+ | Componentes Material Design y soporte Tailwind CSS. |
| **Estado** | Pinia | Gestión de estado global modular y tipada. |
| **Backend** | Koa.js | Servidor ligero basado en middleware para la API. |
| **ORM** | Prisma | Gestión de PostgreSQL con seguridad de tipos estricta. |
| **Validación** | Zod | Validación de esquemas e inferencia de tipos (SSOT). |
| **Auth** | JWT | Flujo de seguridad |
| **Docs** | Swagger UI | Documentación interactiva de los endpoints. |

---

### 📐 Arquitectura del Sistema

La aplicación sigue un diseño **desacoplado y organizado por capas**, lo que permite separar la lógica de infraestructura de la lógica de negocio:

#### 1. Frontend (Capa de Presentación)
* **Vite + Vue 3:** Compilación ultra rápida y reactividad nativa.
* **Pug Templates:** Sintaxis limpia y minimalista para el marcado HTML.
* **Pinia Stores:** Desacoplamiento de la lógica de estado de los componentes UI.

#### 2. Backend (Capa de Servidor)
Para evitar el código fuertemente acoplado, el backend se estructura en:
* **Controllers/Routes (Koa):** Gestión de peticiones y respuestas HTTP.
* **Validation (Zod):** Contratos de datos estrictos para entrada/salida.
* **Services Layer:** Contiene la lógica de negocio pura, agnóstica a Koa.
* **Data Access (Prisma):** Abstracción de la base de datos mediante tipos generados.

```mermaid
graph LR
  subgraph Client
    Vue(Vue 3 + Pug) --> Pinia(Pinia Store)
  end
  
  Pinia --> |JSON API| Koa(Koa.js)
  
  subgraph Server
    Koa --> Zod(Zod Validation)
    Zod --> Service(Services Layer)
    Service --> Prisma(Prisma Client)
  end
  
  Prisma --> DB[(PostgreSQL)]
```

### 🖥️ Frontend (Capa de Presentación)
- **Desacoplamiento:** Uso de **Pinia Stores** para separar la lógica de estado de la interfaz de usuario.
- **Templates:** Uso de **Pug** para un código de componentes más legible y estructurado.
- **Reactividad:** Implementación nativa con Vue 3 y Vite para una experiencia de usuario instantánea.

### ⚙️ Backend (Capa de Servidor)
Estructura modular dividida en responsabilidades claras:
1. **Controllers/Routes (Koa):** Puntos de entrada que gestionan peticiones HTTP.
2. **Validation (Zod):** Contratos estrictos que actúan como "guardianes" de datos.
3. **Services Layer:** Capa agnóstica donde reside la lógica de negocio pura.
4. **Data Access (Prisma):** Abstracción de la base de datos mediante tipos generados automáticamente.

## 📂 Estructura del Repositorio`

```
/ (raíz)  
├─ back/      -> API Layer (Koa + Prisma + Zod)  
├─ front/     -> Client Layer (Vue 3 + Vuetify + Pug)  
├─ common/    -> Shared (Contratos de validación y tipos compartidos)  
├─ docs/      -> Documentación técnica y capturas de pantalla  
└─ commands/  -> Scripts de automatización y respaldos  
```

## 🛠️ Configuración y Requisitos

**Requisitos previos:** Node.js 18+ y PostgreSQL activo.

### 1. Backend (API)
1. cd back
2. npm install
3. Configurar archivo .env:
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB?schema=public"
   PORT=3000
   JWT_SECRET=tu_secreto
   MAIL_USER=tu_correo@gmail.com
4. npx prisma generate
5. npx prisma migrate dev
6. npm run dev -> API activa en http://localhost:3000

### 2. Frontend (SPA)
1. cd front
2. npm install
3. npm run dev -> App activa en http://localhost:5173

---

## ✨ Características Principales
- **Auth Flow:** Registro, activación por email y recuperación de contraseña (JWT).
- **Gestión Integral:** CRUD completo de usuarios, clientes, categorías, productos y operaciones.
- **Type Safety:** Detección de errores en tiempo de compilación gracias a TypeScript y Zod.
- **Documentación:** API documentada con Swagger UI accesible en la raíz del backend.

## 👤 Autor
- **Nombre:** Martin Miguel Galarza Continanza
- **Contacto:** mmgalarza@gmail.com
- **LinkedIn:** mmgalarza@gmail.com

---