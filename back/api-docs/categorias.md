# Categorías

Base: `http://localhost:{PORT}` (por defecto `3000`)

Modelo Prisma `Categorias`:
- `idCategoria` (number)
- `nombre` (string)
- `descripcion` (string | null)
- `icono` (string | null)
- `tipo` (`FAMILIA` | `MADRE` | `HIJA`)
- `activo` (boolean)
- `idCategoriaPadre` (number | null)

## GET `/categorias/`
Devuelve el árbol: familias → madres → hijas (solo `activo=true`).

**Auth**: No

**Response 200**
```json
{ "familias": [ /* Categorias[] con subcategorias */ ] }
```

## GET `/categorias/:id`
Detalle de categoría por id (incluye `subcategorias` activas).

**Auth**: No

**Path params**
- `id` (number)

**Códigos de estado**
- `200` ok
- `400` id inválido o categoría no existe (`{ "error": "..." }`)

## GET `/categorias/madres`
Lista categorías tipo `MADRE`.

**Auth**: No

**Query params**
- `idFamilia` (number, opcional)

**Response 200**
```json
{ "madres": [ /* Categorias[] */ ] }
```

## GET `/categorias/hijas`
Lista categorías tipo `HIJA`.

**Auth**: No

**Query params**
- `idMadre` (number, opcional)

**Response 200**
```json
{ "hijas": [ /* Categorias[] */ ] }
```

**Nota importante (router order)**
- En `src/routes/categorias.routes.ts` el endpoint `GET '/:id'` está declarado antes que `GET '/madres'` y `GET '/hijas'`. Con `@koa/router`, eso puede hacer que `/categorias/madres` y `/categorias/hijas` sean capturados como `:id`. **TODO**: confirmar en runtime.

---

# Categorías (Admin / Dashboard)
Todos los endpoints debajo requieren JWT + rol ADMIN.

## POST `/api/dashboard/categorias`
Crea una categoría.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Body (JSON)** (Zod `CategoriaCreateSchema`):
- `nombre` (string, required, min 1)
- `descripcion` (string, opcional)
- `icono` (string, opcional)
- `tipo` (`FAMILIA` | `MADRE` | `HIJA`) (required)
- `idCategoriaPadre` (number int positive, opcional/nullable)

**Reglas de negocio (service)**
- `FAMILIA`: `idCategoriaPadre` debe ser `null` o ausente.
- `MADRE`: `idCategoriaPadre` es obligatorio y debe referir a una `FAMILIA` activa.
- `HIJA`: `idCategoriaPadre` es obligatorio y debe referir a una `MADRE` activa.

**Response 201**
Categoría creada (`Categorias`).

## PATCH `/api/dashboard/categorias/:id`
Actualiza una categoría (no permite cambiar `tipo`).

**Auth**: Sí (JWT + `rol=ADMIN`)

**Body (JSON)** (Zod `CategoriaUpdateSchema`):
- `nombre` (string, opcional, min 1)
- `descripcion` (string, opcional)
- `icono` (string, opcional)
- `activo` (boolean, opcional)
- `idCategoriaPadre` (number int positive, opcional/nullable)

**Reglas de negocio (service)**
- La jerarquía padre/hijo se valida igual que en create.

## PATCH `/api/dashboard/categorias/:id/desactivar`
Desactiva una categoría (`activo=false`).

**Auth**: Sí (JWT + `rol=ADMIN`)

**Reglas de negocio (service)**
- No permite desactivar si tiene `subcategorias` o `productos` asociados.

## DELETE `/api/dashboard/categorias/:id`
Elimina físicamente la categoría.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Reglas de negocio (service)**
- No permite eliminar si tiene `subcategorias` o `productos` asociados.

**Códigos de estado (admin)**
- `201` create
- `200` update/deactivate/delete
- `400` error de validación/negocio (`{ "error": "..." }`)
- `401` sin token / token inválido
- `403` no admin
