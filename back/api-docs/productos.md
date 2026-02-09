# Productos

Base: `http://localhost:{PORT}` (por defecto `3000`)

Modelo Prisma `Productos` (campos principales):
- `idProducto` (number)
- `nombre` (string)
- `descripcion` (string | null)
- `rol` (`BASE` | `FABRICADO`)
- `activo` (boolean)
- `idCategoria` (number)

Nota sobre `Decimal`:
- Algunas respuestas incluyen `Decimal` (por ejemplo en componentes). En JSON suele serializarse como string o number según la configuración de Prisma/serialización. **TODO**: confirmar formato exacto.

## GET `/productos/`
Lista productos activos.

**Auth**: No

**Response 200**
Array de `Productos`.

## GET `/productos/:id`
Obtiene un producto por id.

**Auth**: No

**Path params**
- `id` (number)

**Response 200**
Producto con `categoria` y `componentes` incluidos (según service).

## GET `/productos/categoria/:idCategoria`
Lista productos activos por categoría.

**Auth**: No

**Path params**
- `idCategoria` (number)

**Nota importante (router order)**
- En `src/routes/productos.routes.ts` el endpoint `GET '/:id'` está declarado antes que `GET '/categoria/:idCategoria'`. Con `@koa/router`, `/productos/categoria/123` puede ser capturado como `id="categoria"`. **TODO**: confirmar en runtime.

---

# Productos (Admin / Dashboard)
Todos los endpoints debajo requieren JWT + rol ADMIN.

## POST `/api/dashboard/`
Crea un producto.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Body (JSON)** (Zod `createProductoSchema`):
- `nombre` (string, required, min 1)
- `descripcion` (string, opcional)
- `rol` (`BASE` | `FABRICADO`) (required)
- `idCategoria` (number int positive, required)

**Response 201**
Producto creado.

## PUT `/api/dashboard/:id`
Actualiza un producto.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Path params**
- `id` (number)

**Body (JSON)** (Zod `updateProductoSchema` = partial de create):
- `nombre` (string, opcional)
- `descripcion` (string, opcional)
- `rol` (`BASE` | `FABRICADO`, opcional)
- `idCategoria` (number, opcional)

**Reglas de negocio (service)**
- Si se intenta setear `rol=BASE` y el producto ya tiene componentes (`ProductoComponentes`), se rechaza con error: "Un producto BASE no puede tener componentes".

## GET `/api/dashboard/`
Lista productos (admin). Actualmente llama al mismo listado que público.

## GET `/api/dashboard/:id`
Obtiene producto por id (admin). Incluye `categoria` y `componentes`.

**Códigos de estado (admin)**
- `201` create
- `200` get/update
- `400` body inválido o regla de negocio
- `401` sin token / token inválido
- `403` no admin

**TODO**
- El controller no maneja explícitamente `404` cuando no existe el producto.
