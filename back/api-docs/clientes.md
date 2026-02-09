# Clientes

Base: `http://localhost:{PORT}` (por defecto `3000`)

No existe router público de clientes montado en `src/app.ts`. Los endpoints de clientes disponibles actualmente están bajo dashboard (ADMIN).

Modelo Prisma `Clientes` (campos principales):
- `idCliente` (number)
- `idUsuario` (number)
- `nombre` (string)
- `email` (string | null) *(existe en Prisma; el DTO actual no lo pide)*
- `calle` (string)
- `numero` (string | null)
- `ciudad` (string)
- `provincia` (string)
- `codigoPostal` (string)
- `pais` (string)
- `contacto` (string | null)
- `activo` (boolean)

Incluye relaciones en respuestas (según service):
- `usuario` (`Usuarios`)
- `historial` (array `Operaciones`)

## GET `/api/dashboard/clientes`
Lista clientes.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Response 200**
Array de `Clientes` con `usuario` e `historial`.

**Códigos de estado**
- `200` ok
- `401` sin token / token inválido
- `403` no admin

## GET `/api/dashboard/clientes/:id`
Obtiene un cliente por id.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Path params**
- `id` (number)

**Response 200**
`Clientes` con `usuario` e `historial`.

**TODO**
- Confirmar respuesta cuando no existe (el controller no setea 404 explícito).

## POST `/api/dashboard/clientes`
Crea un cliente a partir de un usuario existente.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Body (JSON)** (Zod `ClienteCreateSchema`):
- `idUsuario` (number, required)
- `nombre` (string, required, min 2)
- `calle` (string, opcional)
- `numero` (string, opcional)
- `ciudad` (string, opcional)
- `provincia` (string, opcional)
- `codigoPostal` (string, opcional)
- `pais` (string, opcional)
- `contacto` (string, opcional)
- `activo` (boolean, opcional)

**Response 200** *(implementación actual; el controller no fija `201`)*
Cliente creado con `usuario` incluido.

**Códigos de estado**
- `200` creado
- `400` body inválido
- `401` sin token / token inválido
- `403` no admin

## PATCH `/api/dashboard/clientes/:id`
Actualiza un cliente.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Path params**
- `id` (number)

**Body (JSON)**
`ClienteUpdateSchema` = `ClienteCreateSchema.partial()`.

## DELETE `/api/dashboard/clientes/:id`
Desactiva (soft delete): setea `activo=false`.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Response 200**
Cliente actualizado.
