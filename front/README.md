# Frontend - SPA (Vue 3 + Vite)

Aplicación SPA para el sistema de gestión. Incluye navegación con Vue Router, estado global con Pinia y UI con Vuetify + Tailwind.

## Stack
- Vue 3 + Vite
- Vuetify + Tailwind
- Pinia + Vue Router
- Zod (validación de esquemas)

## Requisitos
- Node.js 18+

## Instalación
```powershell
cd d:\vue\front
npm install
```

## Ejecución
```powershell
npm run dev
```

App en `http://localhost:5173`.

## Scripts útiles
- `npm run dev`: servidor de desarrollo
- `npm run build`: build de producción
- `npm run preview`: previsualización del build

## Estructura
- `src/app/`: app shell, rutas, store y layout
- `src/modulos/`: módulos por dominio (categorías, productos, pedidos, etc.)
- `src/components/`: componentes reutilizables
- `src/api/`: capa de acceso a API

## Backend
El frontend consume la API en `back/`. Revisá `back/README.md` para variables de entorno y endpoints.

## Screenshots
Agregá capturas reales en `front/docs/` para mostrar el UI en tu CV.
