# Usuarios

Base: `http://localhost:{PORT}` (por defecto `3000`)

Todos los endpoints de este recurso requieren JWT.

**Auth**
- Header: `Authorization: Bearer <token>`

## GET `/usuarios`
Lista usuarios.

**Auth**: Sí (JWT)

**Query params** (validados con Zod `ListarUsuariosSchema`):
- `skip` (number, opcional): página (0..n). Implementación actual: `skip * take`.
- `take` (number, opcional): tamaño página (1..100).
- `activo` (boolean, opcional)
- `search` (string, opcional): filtra por `username` o `email` (contains, case-insensitive).

**Ejemplo request**
```http
GET /usuarios?skip=0&take=20&activo=true&search=admin
Authorization: Bearer <jwt>
```

**Response 200**
Array de `Usuarios` (modelo Prisma `Usuarios`). Campos:
- `idUsuario` (number)
- `username` (string)
- `email` (string)
- `password` (string) (hash)
- `nombre` (string)
- `activo` (boolean)
- `creadoEn` (string datetime)
- `actualizadoEn` (string datetime)
- `rol` (`ADMIN` | `CLIENTE` | `INVITADO`)

```json
[
  {
    "idUsuario": 1,
    "username": "admin",
    "email": "admin@acme.com",
    "password": "$2b$10$...",
    "nombre": "Admin",
    "activo": true,
    "creadoEn": "2026-01-03T00:00:00.000Z",
    "actualizadoEn": "2026-01-03T00:00:00.000Z",
    "rol": "ADMIN"
  }
]
```

**Códigos de estado**
- `200` ok
- `401` sin token / token inválido

**TODO**
- La validación Zod espera `number/boolean`, pero los query params llegan como string; confirmar si hay coerción.

## GET `/usuarios/:id`
Obtiene un usuario por id.

**Auth**: Sí (JWT)

**Path params**
- `id` (number)

**Response 200**
Un objeto `Usuarios`.

**Response 404**
```json
{ "message": "Usuario no encontrado" }
```

**Códigos de estado**
- `200` ok
- `404` no existe
- `401` sin token / token inválido

## PUT `/usuarios/:id`
Actualiza un usuario (parcial en la práctica; el schema es partial).

**Auth**: Sí (JWT)

**Path params**
- `id` (number)

**Body (JSON)** (valida con `ActualizarUsuarioSchema` = `CrearUsuarioSchema.partial()`):
- `username` (string, opcional, min 3)
- `email` (string, opcional, email)
- `password` (string, opcional, min 6) (se re-hashea)
- `nombre` (string, opcional, min 1)
- `activo` (boolean, opcional)

**Response 200**
```json
{ "user": { /* Usuarios */ } }
```

**Códigos de estado**
- `200` ok
- `400` body inválido u otro error
- `404` usuario no encontrado
- `401` sin token / token inválido

## PATCH `/usuarios/:id`
Mismo handler que PUT.

## DELETE `/usuarios/:id`
Elimina el usuario físicamente (Prisma `delete`).

**Auth**: Sí (JWT)

**Response 204**: sin body.

**Códigos de estado**
- `204` eliminado
- `404` usuario no encontrado
- `400` error
- `401` sin token / token inválido
