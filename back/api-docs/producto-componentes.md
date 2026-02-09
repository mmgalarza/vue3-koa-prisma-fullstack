# Producto Componentes (BOM)

Base: `http://localhost:{PORT}` (por defecto `3000`)

Este recurso se expone actualmente solo bajo dashboard (ADMIN).

Modelo Prisma `ProductoComponentes`:
- `id` (number)
- `idProductoPadre` (number)
- `idProductoComponente` (number)
- `cantidad` (Decimal)

## POST `/api/dashboard/componentes`
Agrega un componente a un producto padre.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Body (JSON)** (Zod `createProductoComponenteSchema`):
- `idProductoPadre` (number int positive, required)
- `idProductoComponente` (number int positive, required)
- `cantidad` (number positive, required)

**Reglas de negocio (service)**
- El producto padre debe existir y **no** puede ser `rol=BASE`.
- `idProductoPadre` no puede ser igual a `idProductoComponente`.
- No permite duplicados (`(idProductoPadre, idProductoComponente)` único).

**Response 201**
Componente creado.

## PUT `/api/dashboard/componentes/:id`
Actualiza un componente.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Body (JSON)** (Zod partial): puede incluir cualquiera de los campos anteriores.

## DELETE `/api/dashboard/componentes/:id`
Elimina físicamente el componente.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Response 200**
```json
{ "id": 123 }
```

## GET `/api/dashboard/componentes/padre/:idProductoPadre`
Lista componentes por producto padre.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Response 200**
Array de componentes con `productoComponente` incluido.

## GET `/api/dashboard/componentes/:id`
Obtiene un componente por id.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Códigos de estado**
- `200` ok
- `201` create
- `400` body inválido o regla de negocio
- `401` sin token / token inválido
- `403` no admin
